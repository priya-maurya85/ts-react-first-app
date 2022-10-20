import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppMemo from './AppMemo';
import HelloForm from './components/HelloForm';
import SignUp from './components/SignUp';
import IncrementDecrement from './IncrementDecrement';

function App() {
  return (
    <div className="App">
      <SignUp />
      <HelloForm />
      <IncrementDecrement />
    </div>
  );
}

export default App;
