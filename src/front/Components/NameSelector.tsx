import { FormEvent, useState } from 'react';

type NameSelectorProps = {
    onSelect: (name: string) => void;
    disabled?: boolean;
};

export function NameSelector({ onSelect, disabled }: NameSelectorProps) {
    const [error, setError] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const name = new FormData(e.currentTarget as HTMLFormElement).get(
            'name'
        );
        if (!name || name.toString().trim() === '') {
            setError('Vous devez choisir un pseudo');
            return;
        }
        onSelect(name.toString());
    };

    return (
        <>
            <h1>Sélectionnez un Pseudo</h1>
            {error && (
                <div className="alert">
                    {error}
                    <button
                        onClick={() => setError('')}
                        className="alert__close"
                    >
                        &times;
                    </button>
                </div>
            )}
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Votre pseudo</label>
                <input type="text" id="name" name="name" required />
                <button className="button" style={{ marginLeft: '.5rem' }}>
                    Choisir
                </button>
            </form>
        </>
    );
}
