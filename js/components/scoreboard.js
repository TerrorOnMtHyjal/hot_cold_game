import React from 'react';
import { connect } from 'react-redux';
import { fetchScoreboard } from '../actions/index';

export function Scoreboard(props) {
  return (
    <div>
      <h3>Leaderboard</h3>
      <ul>{props.scoreboard.map(score => <li>{score.user}{score.count}</li>)}</ul>
      <form onSubmit="#">
        <input type="text" placeholder="What's ya name bub?"/>
        <input type="submit" value="Submit my score!"/>
      </form>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  scoreboard: state.scoreboard
});

export default connect(mapStateToProps)(Scoreboard);