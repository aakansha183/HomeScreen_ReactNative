import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { MenuitemsProps } from '../utils/types';
import stylesmenuitem from '../Styling/Menuitemstyle';
const Menuitems: React.FC<MenuitemsProps> = ({ source, title }) => {
  return (
    <View style={stylesmenuitem.container}>
      <View style={stylesmenuitem.imageContainer}>
        <Image style={stylesmenuitem.image} source={source} />
      </View>
      <Text style={stylesmenuitem.title}>{title}</Text>
    </View>
  );
};

export default Menuitems;


