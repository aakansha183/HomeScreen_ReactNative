import React from 'react';
import { StyleSheet, View } from 'react-native';
import OrderPage from './src/Screens/OrderPage';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <OrderPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
