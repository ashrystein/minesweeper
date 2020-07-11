import {StyleSheet,Dimensions} from 'react-native';
import {dims,colors} from '../../config/config';

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cover:{
    position:"absolute",
    alignItems:"center",
    backgroundColor:colors.transparent,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container:{
    position:"absolute",
    bottom:0,
    width:width*(0.8),
    height:width*(0.6),
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
    backgroundColor:colors.white
  },
  message:{
    fontSize:25,
    fontWeight:"bold"
  },
  btn:{
    width:100,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.red,
    borderRadius:10,
    marginVertical:20
  },
  btnText:{
    fontSize:15,
    fontWeight:"500",
    color:colors.white
  }
})


export default styles;