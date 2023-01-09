import { discColorClass } from '../../func/colors';
import { prevent } from '../../func/dom';
import { PlayerColor } from '../../types';

type VictoryScreenProps = {
    color: PlayerColor;
    name: string;
    onRestart?: () => void;
};

export function VictoryScreen({ color, name, onRestart }: VictoryScreenProps) {
    return (
        <div className="flex" style={{ justifyContent: 'space-between' }}>
            <h2 className="flex" style={{ gap: '.5rem' }}>
                Bravo, {name}
                <div className={discColorClass(color)}></div>à gagné !
            </h2>
            <button className="button" onClick={prevent(onRestart)}>
                Rejouer
            </button>
        </div>
    );
}
