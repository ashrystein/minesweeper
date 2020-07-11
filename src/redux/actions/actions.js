import {UPDATE_PLAY_BOARD,UPDATE_CELLS_LEFT,
    SET_LOSSER_STATUS,INITIALIZE_GAME} from '../types';


export const initializeGame = initialGame => {
    return {
        type: INITIALIZE_GAME,
        payload: initialGame
    }
}

export const updatePlayBoard = playBoard => {
    return {
      type: UPDATE_PLAY_BOARD,
      payload: playBoard
    }
}

export const updateCellsLeft = number => {
    return {
      type: UPDATE_CELLS_LEFT,
      payload: number
    }
}

export const setLoserStatus = status => {
    return {
      type: SET_LOSSER_STATUS,
      payload: status
    }
}