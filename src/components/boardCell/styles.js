import {StyleSheet,Dimensions} from 'react-native';
import {dims,colors,fonts} from '../../config/config';

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    width:(width/(dims.rows+1)),
    height:(width/(dims.rows+1)),
    justifyContent:"center",
    alignItems:"center",
    borderColor:colors.black,
    borderWidth:1,
    borderRadius:5,
    backgroundColor:colors.cellLight
  },
  cellText:{
    fontSize:fonts.medium,
    color:colors.white,
    fontWeight:"bold"
  }
})


export default styles;