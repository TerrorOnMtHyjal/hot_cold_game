import React from 'react';
import { connect } from 'react-redux';
import { fetchScoreboard } from '../actions/index';

export function Scoreboard(props) {
  return (
    <div>
      <h3>Leaderboard</h3>
      <ul>{props.scoreboard.map(score => <li>{score.user}{score.count}</li>)}</ul>
      <button>Add My Score</button>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  scoreboard: state.scoreboard
});

export default connect(mapStateToProps)(Scoreboard);