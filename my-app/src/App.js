import React from 'react';
import './App.css';
import PlayerCount from './components/playerCount'
import PlayerCountList from './components/playerCountList'
import {connect} from 'react-redux'





// const store = createStore(reducer)

function App(props) {
  return (
    <div className="App">
      <div className='nav'>
        
      <h1>BATTLEFIELD 4 INFO</h1>
      <div className='navButtons'>
        <a  className='login' href='https://www.battlefield.com/games/battlefield-4'>Login</a>
      <a  href='https://www.battlefield.com/games/battlefield-4'>Sign Up</a>
      </div>
      <div>
     
      </div>
      </div>
      <PlayerCount />
      <PlayerCountList />
    
    </div>
  );
}

const mapStateToProps = state => {
  return {
    playerCount: state.playerCount,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, null)(App);
