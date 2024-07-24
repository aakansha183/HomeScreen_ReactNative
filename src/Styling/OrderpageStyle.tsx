import { StyleSheet } from "react-native";

const stylesorderpage = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingLeft: 35,
      paddingRight: 35,
    },
    title: {
      top:50,
      width: 400,
      height: 60,
      fontFamily: 'Sofia Pro',
      fontSize: 30,
      fontWeight: '700',
      lineHeight: 30,
      textAlign: 'center',
      marginBottom: 20,
      color: '#323643',
    },
     title1:{
      left:300,
      bottom:50,
      fontFamily: 'Sofia Pro',
      fontSize: 15,
      fontWeight: '700',
      color: '#F56844',
    },
    
    
    featuredTitle: {
      bottom:15,
      fontFamily: 'Sofia Pro',
      fontSize: 25,
      fontWeight: '700',
      color: '#323643',
      marginBottom: 10,
      marginTop: 20,
    },
    scrollViewContent: {
      flexDirection: 'row',
      marginBottom: 20,
    },
  });
  export default stylesorderpage;