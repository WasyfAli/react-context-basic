import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserProvider value="Context"><ComponentC /></UserProvider>
       
      </header>
    </div>
  );
}

export default App;
