import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import stylesseachbar from '../Styling/SearchbarStyle';
const SearchBar: React.FC = () => {
  return (
    <View style={stylesseachbar.container}>
      <View style={stylesseachbar.searchSection}>
        <Image
          style={stylesseachbar.searchIcon}
          source={require('../Assests/search.png')} 
        />
        <TextInput
          style={stylesseachbar.input}
          placeholder="Find for food or restaurant..."
          placeholderTextColor="#A1A1A1"
        />
        <Image
          style={stylesseachbar.filterIcon}
          source={require('../Assests/icon.png')} 
        />
      </View>
    </View>
  );
};

export default SearchBar;
