import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Suchen & kopieren
      </header>

        <div style={{paddingTop:10, paddingLeft:10}}>
          <textarea style={{height:600, width:400}}></textarea>
        </div>
        <button>Zielordner</button>
        <button>search & copy</button>
      App
    </div>
  );
}

export default App;
