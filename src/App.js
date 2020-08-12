import React from 'react';
import Hello from './Hello'
import Wrapper from './Wrapper'

import './App.css';

function App() {
  return (
    
      <Wrapper>
      <Hello name="김태경"  color="red" />
      <Hello  color="blue" />
      </Wrapper>
  );
}

export default App;
