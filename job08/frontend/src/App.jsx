import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
            })
            .catch((error) => {
                console.error('Erreur :', error);
            });
    }, []);

    return (
        <div>
            <h1>Frontend React ⚛️</h1>
            <p>Hot Reload fonctionne</p>
        </div>
    );
}

export default App;