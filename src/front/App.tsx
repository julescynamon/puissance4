import { PlayerColor } from '../types';
import { ColorSelector } from './screen/ColorSelector';
import { Grid } from './screen/Grid';
import { NameSelector } from './screen/NameSelector';

function App() {
    return (
        <div className="container">
            <NameSelector disabled onSelect={() => null} />
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
            <Grid
                onDrop={console.log}
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
