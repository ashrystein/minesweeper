import {StyleSheet,Dimensions} from 'react-native';
import {colors,fonts} from '../../config/config';
const {width,height} = Dimensions.get('window');


const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"space-around",
      alignItems:"center",
      backgroundColor:colors.brand,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      marginHorizontal:20
    },
    board:{
      width:width,
      height:width,
    },
    title:{
      color:colors.gold,
      fontSize:fonts.large,
      fontWeight:"bold"
    }
  })


  export default styles;