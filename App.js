import React from 'react';
import Minesweeper from './src/screens/minesweeper/minesweeper';
import { Provider } from "react-redux";
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Minesweeper/>
    </Provider>
  );
};

export default App;
