import { StyleSheet } from "react-native";


const stylesheader = StyleSheet.create({
    container: {
      width:350,
      top:10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 10,
      backgroundColor: '#fff',
    },
    icon: {
      right:10,
      top:12,
      width: 100,
      height: 40,
    },
    deliveryInfo: {
      alignItems: 'center',
    },
    deliverText: {
      fontSize: 14,
      color: '#888',
    },
    address: {
      fontSize: 16,
      color: '#FE724C',
      fontWeight: 'bold',
    },
    profile: {
      width:80,
      height: 40,
    },
  });
  export default stylesheader;