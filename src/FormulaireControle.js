import { useState } from "react";

function FormulaireControle() {

    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nom : ${nom}, Email : ${email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
                placeholder="Nom" />

            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email" />

            <button type="submit">Send</button>
        </form>
    );
}

export default FormulaireControle;