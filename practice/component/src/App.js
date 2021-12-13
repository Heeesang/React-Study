import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';

function App() {
  return (
    <>
      <MyComponent name="React" favoriteNumber={2}>리액트</MyComponent>
      <Counter/>
      <Say/>
      <EventPractice/>
    </>  
  );
}

export default App;
