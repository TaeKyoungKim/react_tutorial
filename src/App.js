import React from 'react';
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'

import './App.css';


function App() {
  return (
      <>
      <Wrapper>
      <Hello name="김태경"  color="red" isSpecial={true} />
      <Hello  color="blue" />
      </Wrapper>
      <Counter />
      </>
  );
}

export default App;
