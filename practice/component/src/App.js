import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

function App() {
  return (
    <>
      <MyComponent name="React" favoriteNumber={2}>리액트</MyComponent>
      <Counter/>
      <Say/>
    </>  
  );
}

export default App;
