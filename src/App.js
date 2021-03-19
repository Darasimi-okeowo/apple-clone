import React from 'react';
import './App.css';
import Nav from './Nav/Nav'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Watch from './Watch/Watch'

function App() {
  return (
    <div className="App">
      <Nav />
      <Section1 />
      <Section2 />
      <Watch />
    </div>
  );
}

export default App;
