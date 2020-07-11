import { createStore, combineReducers } from 'redux';
import playBoardReducer from './reducers/playBoard';


const rootReducer = combineReducers({
    playBoard:playBoardReducer
});

const store = createStore(rootReducer);
  
export default store;