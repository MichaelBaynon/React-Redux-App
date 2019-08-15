import React from 'react';
import './App.css';
import PlayerCount from './components/playerCount'
import PlayerCountList from './components/playerCountList'





// const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <div className='nav'>
        
      <h1>BATTLEFIELD 4 INFO</h1>
      <div className='navButtons'>
        <a  className='login' href='https://www.battlefield.com/games/battlefield-4'>Login</a>
      <a  href='https://www.battlefield.com/games/battlefield-4'>Sign Up</a>
      </div>
      
      </div>
      <PlayerCount />
      <PlayerCountList />
    
    </div>
  );
}

export default App;
