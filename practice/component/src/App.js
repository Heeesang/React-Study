import React from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import IterationSample from "./IterationSample";
function App() {
  return (
    <>
      <MyComponent name="React" favoriteNumber={2}>
        리액트
      </MyComponent>
      <Counter />
      <Say />
      <EventPractice />
      <IterationSample />
    </>
  );
}

export default App;
