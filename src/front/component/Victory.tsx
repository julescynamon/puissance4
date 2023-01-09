import { discColorClass } from '../../func/color'
import { PlayerColor } from '../../types'
import { prevent } from '../../func/dom'

type VictoryProps = {
  color: PlayerColor,
  name: string,
  onRestart?: () => void
}

export function Victory ({color, name, onRestart}: VictoryProps) {
  return <div className="flex" style={{justifyContent: 'space-between'}}>
    <h2 className="flex" style={{gap: '.5rem'}}>Bravo, {name}<div className={discColorClass(color)}></div> a gagné</h2>
    <button className="button" onClick={prevent(onRestart)}>Rejouer</button>
  </div>
}
