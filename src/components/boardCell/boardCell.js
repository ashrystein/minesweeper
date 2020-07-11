import React,{useState,useEffect} from 'react';
import {TouchableOpacity,Text} from 'react-native';
import styles from './styles';
import {colors,countsColors} from '../../config/config';


const BoardCell = (props) => {
    
    const [cellValue,setValue] = useState('0');
    const [cellColor,setColor] = useState('');
    const [contentColor,setContentColor] = useState('');

    useEffect(()=>{
        const setCellSstatus = () => {
            switch(props.value){
                case '0':
                    setValue('');
                    setColor(colors.cellLight);
                    return;
                case '':
                    setValue('');
                    setColor(colors.cellDark);
                    return;
                case '*':
                    setValue('💣');
                    setColor(colors.cellDark);
                    setContentColor(colors.red)
                    return;
                default:
                    setValue(props.value);
                    setColor(colors.cellDark);
                    setContentColor(countsColors[(parseInt(props.value)-1)%countsColors.length])
                    return;
            }
        }
        setCellSstatus();
    })

    return(
        <TouchableOpacity 
            style={[styles.container,{backgroundColor:cellColor}]}
            onPress={()=>props.onPress()}
        >
            <Text style={[styles.cellText,{color:contentColor}]}>{cellValue}</Text>
        </TouchableOpacity>
    )
}

export default BoardCell;