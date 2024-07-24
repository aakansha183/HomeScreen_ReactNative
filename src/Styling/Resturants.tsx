import { StyleSheet } from "react-native";

const stylesresturants = StyleSheet.create({
    container: {
      bottom:30,
      padding: 20,
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    title2:{

    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
    },
    infoContainer: {
      marginTop: 10,
      alignItems: 'center',
    },
    fav:{
      width:50,
      left:300,
      top:17,
     position:'absolute'
    },
    image3:{
       top :50,
    },
    name: {
        bottom:10,
        right:120,
      textAlign:'right',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 5,
    },
    ratingContainer: {
        borderRadius:8,
        backgroundColor:'white',
        bottom:248,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
      right:145,
    },
    rating: {
      fontSize: 14,
      color: 'black',
    },
    deliveryTime: {
      fontSize: 14,
      color: '#888',
      marginBottom: 10,
      right:110,
      bottom:32,
    },
    tagsContainer: {
        bottom:20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    tag: {
      fontSize: 18,
      color: '#888',
      marginRight: 10,
      marginBottom: 5,
      backgroundColor: '#f1f1f1',
      padding: 5,
      borderRadius: 3,
    },
  });
  export default stylesresturants;