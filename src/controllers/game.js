import {cell,dims,minesNumber} from '../config/config';
import {updateCellsLeft,setLoserStatus,
    updatePlayBoard,initializeGame} from '../redux/actions/actions';
import  store  from '../redux/store';

export class minesweeperGame {
    originalBoard;
    playBoard;
    cellsLeft;

    constructor(){
        this.initialize();
    }

    initialize(){
        this.originalBoard = new Array(dims.rows).fill('0').map(() => new Array(dims.columns).fill('0'));
        this.playBoard = new Array(dims.rows).fill('0').map(() => new Array(dims.columns).fill('0'));
        this.cellsLeft = (dims.rows * dims.columns) - minesNumber;
        
        let r; let c;
        for (let i=0; i<minesNumber;){
            r = Math.floor(Math.random() * dims.rows);
            c = Math.floor(Math.random() * dims.columns);
            if(this.originalBoard[r][c] !== cell.mine){
                this.originalBoard[r][c] = cell.mine;
                i++;
            }
        }
        store.dispatch(initializeGame({
            cellsLeft:this.cellsLeft,
            playBoard:this.playBoard
        }));
        return;
    }

    checkMine(row,col){
        if (this.originalBoard[row][col] === cell.mine) 
            return true; 
        else
            return false;
    }

    checkBordLimit(row,col){
        if ((row >= 0 && row < dims.rows) && (col >= 0 && col < dims.columns)) 
            return true; 
        else
            return false;
    }

    countSurroundMines(row,col){
        let count = 0;
        for (let i = row-1 ; i <= row+1 ; i++){ 
            for (let j = col-1 ; j <= col+1 ; j++){ 
                if(this.checkBordLimit(i,j)){
                    if(this.checkMine(i,j)){
                        count++;
                    }
                }
            } 
        }
        return count;
    }

    isFirstClick(){
        return (this.cellsLeft === ((dims.rows * dims.columns) - minesNumber))  // first hit and mine not counted 
    }

    changeMineOnFirstClick(row,col){
        for (let i = 0 ; i < dims.rows ; i++){
            var updated = false; 
            for (let j = 0 ; j < dims.columns ; j++){
                if(this.originalBoard[i][j] === cell.unClicked){
                    this.originalBoard[i][j] = cell.mine;
                    this.originalBoard[row][col] = cell.unClicked;
                    updated = true;
                    break;
                }
            }
            if(updated)
                break; 
        }

        this.clearAdjecentCells(row,col);
    }

    CellPressed(row,col){
        if(this.playBoard[row][col] !== cell.unClicked)
            return; // this means cell already clicked.
        
        if(this.originalBoard[row][col] === cell.mine){
            if(this.isFirstClick()){
                this.changeMineOnFirstClick(row,col);
                return;
            }
                
            store.dispatch(setLoserStatus(true));
            this.placeMinesInPlayBoard();
            return;  // this means game over.
        }

        this.clearAdjecentCells(row,col);
    }

    clearAdjecentCells(row,col){
        if(this.playBoard[row][col] !== cell.unClicked)
            return;

        this.cellsLeft-=1;
        store.dispatch(updateCellsLeft(this.cellsLeft));
        
        let count = this.countSurroundMines(row,col);
        
        if(count > 0){
            this.playBoard[row][col] = count.toString();
            return false; // stop recursive
        }
        else{
            this.playBoard[row][col] = cell.cleared;
            this.checkBordLimit(row-1,col-1) && this.clearAdjecentCells(row-1,col-1);
            this.checkBordLimit(row-1,col) && this.clearAdjecentCells(row-1,col);
            this.checkBordLimit(row-1,col+1) && this.clearAdjecentCells(row-1,col+1);
            this.checkBordLimit(row,col-1) && this.clearAdjecentCells(row,col-1);
            this.checkBordLimit(row,col+1) && this.clearAdjecentCells(row,col+1);
            this.checkBordLimit(row+1,col-1) && this.clearAdjecentCells(row+1,col-1);
            this.checkBordLimit(row+1,col) && this.clearAdjecentCells(row+1,col);
            this.checkBordLimit(row+1,col+1) && this.clearAdjecentCells(row+1,col+1);
        }

        store.dispatch(updatePlayBoard(this.playBoard));
    }

    placeMinesInPlayBoard(){
        for (let i = 0 ; i < dims.rows ; i++){ 
            for (let j = 0 ; j < dims.columns ; j++){
                if(this.originalBoard[i][j] === cell.mine)
                    this.playBoard[i][j] = cell.mine;
            } 
        }
        
        store.dispatch(updatePlayBoard(this.playBoard));
    }
}