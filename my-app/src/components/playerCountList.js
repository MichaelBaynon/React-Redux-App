import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import PlayerCount from './playerCount'

const PlayerCountList = props => {
  return (
    <>
     
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Player Count Data'
        )}
      </button>
      {props.playerCount &&
        props.playerCount.map(data => <PlayerCount key={data} playerCount={data} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    playerCounts: state.playerCounts
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(PlayerCountList);
