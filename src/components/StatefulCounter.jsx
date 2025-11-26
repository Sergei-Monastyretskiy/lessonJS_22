import { useState } from 'react';
import StatelessDisplay from './StatelessDisplay';

const StatefulCounter = () => {
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('');

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    return (
        <div style={styles.container}>
            <h2>Stateful компонент (з useState)</h2>

            <div style={styles.section}>
                <h3>Лічильник</h3>
                <div style={styles.buttonGroup}>
                    <button onClick={decrement} style={styles.button}>-</button>
                    <span style={styles.count}>{count}</span>
                    <button onClick={increment} style={styles.button}>+</button>
                </div>
                <button onClick={reset} style={styles.resetButton}>Скинути</button>
            </div>

            <div style={styles.section}>
                <h3>Введіть ваше ім'я</h3>
                <input
                    type="text"
                    value={userName}
                    onChange={handleNameChange}
                    placeholder="Ваше ім'я"
                    style={styles.input}
                />
            </div>

            <StatelessDisplay
                count={count}
                userName={userName || 'Гість'}
            />
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
    section: {
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
    },
    buttonGroup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        margin: '20px 0',
    },
    button: {
        fontSize: '24px',
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        minWidth: '50px',
    },
    count: {
        fontSize: '32px',
        fontWeight: 'bold',
        minWidth: '60px',
        textAlign: 'center',
    },
    resetButton: {
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '100%',
        maxWidth: '300px',
        borderRadius: '5px',
        border: '2px solid #ddd',
    },
};

export default StatefulCounter;
