import {UPDATE_PLAY_BOARD,UPDATE_CELLS_LEFT,
    SET_LOSSER_STATUS,INITIALIZE_GAME} from '../types';

const initialState = {
    playBoard:null,
    cellsLeft:0,
    loser:false
};

const playBoardReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZE_GAME:
            return {
                ...state,
                playBoard:action.payload.playBoard,
                cellsLeft:action.payload.cellsLeft,
                loser:false
            };

        case UPDATE_PLAY_BOARD:
            return {
                ...state,
                playBoard:action.payload,
            };

        case UPDATE_CELLS_LEFT:
            return {
                ...state,
                cellsLeft:action.payload,
            };

        case SET_LOSSER_STATUS:
            return {
                ...state,
                loser:action.payload,
            };

        default:
            return state;
    }
}

export default playBoardReducer;