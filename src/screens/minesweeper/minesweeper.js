import React, { useState, useEffect } from 'react';
import {SafeAreaView,TouchableOpacity,Text,View} from 'react-native';
import {minesweeperGame} from '../../controllers/game';
import BoardCell from '../../components/boardCell/boardCell';
import Popup from '../../components/popup/popup';
import {dims} from '../../config/config';
import styles from './styles';
import {useSelector} from "react-redux";


const minesweeper = new minesweeperGame();

const Minesweeper = () => {
  const [res,setRes] = useState('playing') // 1- win  2- lose  3- still playing
  const cellsLeft = useSelector(state => state.playBoard.cellsLeft);
  const loser = useSelector(state => state.playBoard.loser);
  const playBoard = useSelector(state => state.playBoard.playBoard);

  useEffect(()=>{
    if(loser)
      setRes('lose');
    else if(cellsLeft === 0)
      setRes('win')
    else
      setRes('playing');
  })

  const onPressBoardCell = (row,col) => {
    minesweeper.CellPressed(row,col);
  }

  const buildBoard = () => {
    let board = [];
    for (let i=0; i<dims.rows; i++){ 
        let row = [];
        for (let j=0; j<dims.columns; j++){ 
            row.push(
                <BoardCell
                    value={playBoard[i][j]}
                    onPress={()=>onPressBoardCell(i,j)}
                /> 
            )
        } 
        board.push(<View key={i} style={styles.row}>{row}</View>);
    }
    return <View style={styles.board}>{board}</View>;
  } 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minesweeper</Text>
      {buildBoard()}
      <Popup retry={()=>minesweeper.initialize()} result = {res}/>
    </SafeAreaView>
  );
};

export default Minesweeper;