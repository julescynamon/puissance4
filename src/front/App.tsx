import { PlayerColor } from '../types';
import { ColorSelector } from './Components/ColorSelector';
import { Grid } from './Components/Grid';
import { NameSelector } from './Components/NameSelector';
import { PlayScreen } from './Components/PlayScreen';
import { VictoryScreen } from './Components/VictoryScreen';

function App() {
    return (
        <div className="container">
            <NameSelector onSelect={() => null} />
            <hr />
            <ColorSelector
                onSelect={() => null}
                players={[
                    {
                        id: '1',
                        name: 'john',
                        color: PlayerColor.RED,
                    },
                    {
                        id: '2',
                        name: 'marc',
                        color: PlayerColor.YELLOW,
                    },
                ]}
                colors={[PlayerColor.RED, PlayerColor.YELLOW]}
            />
            <hr />
            <PlayScreen color={PlayerColor.RED} />
            <VictoryScreen color={PlayerColor.RED} name="john" />
            <Grid
                onDrop={() => null}
                color={PlayerColor.RED}
                grid={[
                    ['E', 'E', 'E', 'E', 'E', 'E', 'R'],
                    ['E', 'E', 'E', 'E', 'E', 'R', 'Y'],
                    ['E', 'E', 'E', 'E', 'E', 'R', 'R'],
                    ['E', 'E', 'E', 'E', 'E', 'R', 'Y'],
                    ['E', 'E', 'E', 'E', 'E', 'Y', 'R'],
                    ['E', 'E', 'E', 'E', 'E', 'Y', 'Y'],
                ]}
            />
        </div>
    );
}

export default App;
