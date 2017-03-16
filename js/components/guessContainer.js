import React from 'react';
import { connect } from 'react-redux';
import DistancePrompt from './distanceprompt';
import GuessList from './guessList';
import GuessInput from './guessInput';
import Scoreboard from './scoreboard';
import { fetchScoreboard } from '../actions/index';

export function GameContainer(props){
  const scoreboard = props.completedGame ? <Scoreboard /> : undefined;
  if(scoreboard){
    props.dispatch(fetchScoreboard());
  }

  return(
    <div className="gameContainer">
      <DistancePrompt />
      <GuessInput />
      <GuessList />
      {scoreboard}
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  completedGame: state.completedGame
});

export default connect(mapStateToProps)(GameContainer);