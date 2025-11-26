import './App.css'
import StatefulCounter from './components/StatefulCounter'

function App() {
  return (
    <>
      <div style={styles.header}>
        <h1>React компоненти: Stateful та Stateless</h1>
        <p style={styles.subtitle}>Демонстрація роботи з станом та пропсами</p>
      </div>

      <StatefulCounter />
    </>
  )
}

const styles = {
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#61dafb',
    marginTop: '10px',
  },
};

export default App
