import { StyleSheet } from 'react-native';
const stylesmenuitem = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: 15,
    },
    imageContainer: {
      top:50,
      width: 58.57,
      height: 98,
      marginRight: 20,
      borderRadius: 100,
      backgroundColor: '#FFFFFF',
  
      shadowColor: '#FE724C',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.4,
      shadowRadius: 30,
      opacity: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '80%',
      height: '80%',
      borderRadius: 100,
    },
    title: {
      top:60,
      marginBottom:20,
      marginTop:90,
      fontFamily: 'Sofia Pro',
      fontSize: 18,
      fontWeight: '700',
      position:'absolute',
    },
  });
  export default stylesmenuitem;