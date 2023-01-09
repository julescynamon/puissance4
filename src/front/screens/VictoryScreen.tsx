import { Victory } from '../component/Victory'
import { useGame } from '../hooks/useGame'
import { currentPlayer } from '../../func/game'

type VictoryScreenProps = {}

export function VictoryScreen ({}: VictoryScreenProps) {
  const {context, send} = useGame()
  const player = currentPlayer(context)
  const restart = () => send({type: 'restart'})
  return <div>
    <Victory color={player.color!} name={player.name} onRestart={restart}/>
  </div>
}
