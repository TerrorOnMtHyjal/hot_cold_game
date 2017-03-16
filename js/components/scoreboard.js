import React from 'react';
import { connect } from 'react-redux';
import { fetchScoreboard, postUserScore } from '../actions/index';

function preventAndDispatch(e, props) {
  e.preventDefault();
  props.dispatch(postUserScore({user:userInput.value, count: props.count}));
}
let userInput;

export function Scoreboard(props) {
  return (
    <div>
      <h3>Leaderboard</h3>
      <ul>{props.scoreboard.map(score => <li>{score.user}{score.count}</li>)}</ul>
      <form onSubmit={(e) => preventAndDispatch(e, props)}>
        <input type="text" placeholder="What's ya name bub?" ref={ref => userInput=ref}/>
        <input type="submit" value="Submit my score!"/>
      </form>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  scoreboard: state.scoreboard,
  count: state.userGuesses.length
});

export default connect(mapStateToProps)(Scoreboard);