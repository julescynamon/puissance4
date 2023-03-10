import { useGame } from '../hooks/useGame';
import { ColorSelector } from '../component/ColorSelector';
import { PlayerColor } from '../../types';
import { prevent } from '../../func/dom';

type LobbyScreenProps = {};

export function LobbyScreen({}: LobbyScreenProps) {
    const { send, context, can } = useGame();
    const colors = [PlayerColor.YELLOW, PlayerColor.RED];

    const chooseColor = (color: PlayerColor) =>
        send({
            type: 'chooseColor',
            color,
        });
    const startGame = () => send({ type: 'start' });

    const canStart = can({ type: 'start' });

    return (
        <div>
            <ColorSelector
                onSelect={chooseColor}
                players={context.players}
                colors={colors}
            />
            <p>
                <button
                    disabled={!canStart}
                    className="button"
                    onClick={prevent(startGame)}
                >
                    Démarrer
                </button>
            </p>
        </div>
    );
}
