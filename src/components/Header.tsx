import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import stylesheader from '../Styling/HeaderStyle';

const Header: React.FC = () => {
  return (
    <View style={stylesheader.container}>
      <TouchableOpacity>
        <Image source={require('../Assests/G2.png')} style={stylesheader.icon} />
      </TouchableOpacity>
      <View style={stylesheader.deliveryInfo}>
        <Text style={stylesheader.deliverText}>Deliver to</Text>
        <Text style={stylesheader.address}>4102 Pretty View Lane</Text>
      </View>
      <TouchableOpacity>
        <Image source={require('../Assests/G1.png')} style={stylesheader.profile} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;