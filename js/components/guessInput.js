import React from 'react';
import { connect } from 'react-redux';
import { processUserGuess, processUserInput, fetchScoreboard } from '../actions/index';

function preventAndDispatch(e, props){
  e.preventDefault();
  props.dispatch(processUserGuess(props.userInput));
  if (props.target == props.userInput) {
     props.dispatch(fetchScoreboard());
  }
}

export function GuessInput(props){
  return (
    <form onSubmit={(e) => preventAndDispatch(e, props)}>
        <div className="input-group guessBar">
          <input type="text" className="form-control" placeholder="What's your guess?" value={props.userInput} onChange={(event) => props.dispatch(processUserInput(event.target.value))}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">GUESS</button>
          </span>
        </div>
    </form>
  );
}

const mapStateToProps = (state, props) => ({
  userInput : state.userInput,
  target: state.targetNumber
});

export default connect(mapStateToProps)(GuessInput);
