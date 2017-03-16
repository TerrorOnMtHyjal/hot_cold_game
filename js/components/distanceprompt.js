import React from 'react';
import { connect } from 'react-redux';

export function DistancePrompt(props) {
  return <h2 className="prompt">{props.currentTemp || 'Hey you, pick a number!'}</h2>;
}

const mapStateToProps = (state, props) => ({
  currentTemp: state.currentTemp
});

export default connect(mapStateToProps)(DistancePrompt);
