import './App.css';
import { useState } from 'react';

function App() {
  const [aguante, aguanteQue] = useState("...");

  return (
    <div className="App">
      <h1> Aguante{aguante} </h1>
      <button onClick={ () => aguanteQue(" BOKITA") } > Que? </button>
    </div>
  );
}

export default App;
