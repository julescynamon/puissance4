import { FormEvent, useState } from 'react'

type NameSelectorProps = {
  onSelect: (name: string) => void,
  disabled?: boolean
}

export function NameSelector ({onSelect, disabled}: NameSelectorProps) {
  const [error, setError] = useState('')
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const name = new FormData(e.currentTarget as HTMLFormElement).get('name')
    if (!name || name.toString().trim() === '') {
      setError('Vous devez choisir un pseudo')
      return;
    }
    onSelect(name.toString())
  }

  return <>
    <h1>Sélectionner un pseudo</h1>
    {error && <div className="alert">
      {error}
      <button onClick={() => setError('')} className="alert__close">&times;</button>
    </div>}
    <form className="flex" style={{gap: '.5rem'}} action="src/front/component/NameSelector" onSubmit={handleSubmit}>
      <label htmlFor="name">Votre pseudo</label>
      <input disabled={disabled} type="text" id="name" name="name" required/>

      <button className="button" disabled={disabled}>Choisir</button>
    </form>
  </>
}
