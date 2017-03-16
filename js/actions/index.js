//import {connect} from 'react-redux';
export const GENERATE_NEW_GAME = 'GENERATE_NEW_GAME';
export const PROCESS_USER_GUESS = 'PROCESS_USER_GUESS';
export const CHANGE_MODAL_STATE = 'CHANGE_MODAL_STATE';
export const PROCESS_USER_INPUT = 'PROCESS_USER_INPUT';
export const FETCH_SCOREBOARD = 'FETCH_SCOREBOARD'
export const FETCH_SCOREBOARD_SUCCESS = 'FETCH_SCOREBOARD_SUCCESS';
export const FETCH_SCOREBOARD_ERROR = 'FETCH_SCOREBOARD_ERROR';
export const POST_USER_SCORE_SUCCESS = 'POST_USER_SCORE_SUCCESS';
export const POST_USER_SCORE_ERROR = 'POST_USER_SCORE_ERROR';


export const fetchScoreboard = () => dispatch => {
    const url = new URL('http://localhost:8081/api/guesses');

    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).then(scoreboard => {
        return dispatch(
            fetchScoreboardSuccess(scoreboard.scoreboard)
        );
    }).catch(error =>
        dispatch(fetchScoreboardError(error))
    );
}


export const postUserScore = (newScore) => dispatch => {
    const url = new URL('http://localhost:8081/api/guesses');
    const postMethod = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newScore)
     };
     console.log(newScore);
    return fetch(url, postMethod).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).then(scoreboard => {
        return dispatch(
            postUserScoreSuccess(scoreboard.scoreboard)
        );
    }).catch(error =>
        dispatch(postUserScoreError(error))
    );
}

export const fetchScoreboardSuccess = (scoreboard) => ({
  type: FETCH_SCOREBOARD_SUCCESS,
  scoreboard
});

export const fetchScoreboardError = (error) => ({
  type: FETCH_SCOREBOARD_ERROR,
  error
});

export const postUserScoreSuccess = (scoreboard) => ({
    type: POST_USER_SCORE_SUCCESS,
    scoreboard
});

export const postUserScoreError = (error) => ({
  type: POST_USER_SCORE_ERROR,
  error
});

export const generateNewGame = () => ({
  type: GENERATE_NEW_GAME
});

export const processUserInput = (userInput) => ({
  type: PROCESS_USER_INPUT,
  userInput
});

export const processUserGuess = (guess, e) => ({
  type: PROCESS_USER_GUESS,
  guess,
  e
});

export const changeModalState = () => ({
    type: CHANGE_MODAL_STATE
});
