import { PlayerSession } from '../../types';
import { NameSelector } from '../component/NameSelector';
import { saveSession } from '../func/session';

type LogginScreenProps = {};

export function LogginScreen({}: LogginScreenProps) {
    const handleLogin = async (name: string) => {
        const response: PlayerSession = await fetch('/api/players', {
            method: 'POST',
        }).then((res) => res.json());
        const player = saveSession({
            ...response,
            name,
        });
    };

    return (
        <div>
            <NameSelector onSelect={handleLogin} />
        </div>
    );
}
