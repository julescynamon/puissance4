import { discColorClass } from '../../func/colors';
import { PlayerColor } from '../../types';

type PlayScreenProps = {
    color: PlayerColor;
};

export function PlayScreen({ color }: PlayScreenProps) {
    return (
        <div>
            <h2 className="flex" style={{ gap: '.5rem' }}>
                Au tour de
                <div className={discColorClass(color)}></div>
                de jouer.
            </h2>
        </div>
    );
}
