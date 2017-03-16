import React from 'react';
import { connect } from 'react-redux';
import { generateNewGame, changeModalState } from '../actions/index';
import GuessContainer from './guessContainer';
import Modal from './modal'

export function Gameboard(props){
  const modalValue = props.modal ? <Modal /> : undefined;
  return (
    <div className="container main">
      {modalValue}
      <div id="actionBar" className="container-fluid">
        <button id= "whatBtn" className="btn btn-primary" onClick={() => props.dispatch(changeModalState())}>WHAT?</button>
        <button id="newGameBtn" className="btn btn-danger" onClick={() => props.dispatch(generateNewGame())}>+NEW GAME</button>
      </div>
      <div id="centerDiv">
        <h1 className="title"><span className="hotTitle">Hot</span> <span className="orTitle">or</span> <span className="coldTitle">Cold?</span></h1>
        <GuessContainer />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  modal: state.modal
});

export default connect(mapStateToProps)(Gameboard);
