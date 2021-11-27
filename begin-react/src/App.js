import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {
  const name = "react";
  const style ={
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };

  return (
    <Wrapper>
      <Hello/>
      <Hello name= "react" color="red"/>
      <div style= {style}>React</div>
      <div className = 'gray-box'></div> 

    </Wrapper>
  );
}

export default App;
