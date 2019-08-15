import React from 'react';
import './App.css';
import playerCount from './components/playerCount'
import {createStore} from 'redux'


import { reducer } from './reducers'

// const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <div className='nav'>
      <h1>BATTLEFIELD 4 INFO</h1>
      <div className='navButtons'>
        <a  className='login' href='#'>Login</a>
      <a  href='#'>Sign Up</a>
      </div>
      
      </div>
      
     <playerCount />
    </div>
  );
}

export default App;
