import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
function App() {
  return (
    <div style={{background: "rgba(0,0,0,0.4)"}} className="App">
      <Header></Header>
      <MainSection></MainSection>
    </div>
  );
}

export default App;
