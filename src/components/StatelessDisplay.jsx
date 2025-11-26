const StatelessDisplay = ({ count, userName }) => {
    const getMessage = () => {
        if (count === 0) {
            return 'Почніть рахувати!';
        } else if (count > 0) {
            return `Ви натиснули ${count} раз(ів)!`;
        } else {
            return `Ви у від'ємній зоні: ${count}`;
        }
    };

    return (
        <div style={styles.container}>
            <h2>Stateless компонент (тільки пропси)</h2>

            <div style={styles.card}>
                <h3 style={styles.greeting}>Привіт, {userName}! 👋</h3>
                <p style={styles.message}>{getMessage()}</p>

                <div style={styles.stats}>
                    <div style={styles.statItem}>
                        <span style={styles.label}>Поточне значення:</span>
                        <span style={styles.value}>{count}</span>
                    </div>
                    <div style={styles.statItem}>
                        <span style={styles.label}>Статус:</span>
                        <span style={styles.value}>
                            {count > 10 ? '🔥 Високий' : count > 0 ? '✅ Позитивний' : count < 0 ? '⚠️ Негативний' : '⭕ Нуль'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#fff3e0',
        borderRadius: '8px',
    },
    card: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    greeting: {
        color: '#ff6f00',
        marginBottom: '15px',
    },
    message: {
        fontSize: '18px',
        marginBottom: '20px',
        color: '#555',
    },
    stats: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
    label: {
        fontSize: '14px',
        color: '#888',
        fontWeight: 'bold',
    },
    value: {
        fontSize: '20px',
        color: '#333',
    },
};

export default StatelessDisplay;
