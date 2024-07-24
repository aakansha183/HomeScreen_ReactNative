import { StyleSheet } from "react-native";

const stylesseachbar = StyleSheet.create({
    container: {
      top:50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchSection: {
      flexDirection: 'row',
      backgroundColor: '#F2F2F2',
      borderRadius: 20,
      padding: 10,
      alignItems: 'center',
      width: '100%',
    },
    searchIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#000',
    },
    filterIcon: {
      width: 20,
      height: 20,
      marginLeft: 10,
    },
  });
  export default stylesseachbar;