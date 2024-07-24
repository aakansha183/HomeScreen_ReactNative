import React from 'react';
import {Text, View, Image } from 'react-native';
import { FeaturedRestaurantProps } from '../utils/types';
import stylesresturants from '../Styling/Resturants';
const FeaturedRestaurant: React.FC<FeaturedRestaurantProps> = ({ imageSource, name, rating, deliveryTime, tags }) => {
  return (
    <View style={stylesresturants.container}>
      <Image style={stylesresturants.image} source={imageSource} />
      <Image source={require('../Assests/B11.png')} style={stylesresturants.fav} />
      <Image source={require('../Assests/C1.png')} style={stylesresturants.image3} />
      
      <View style={stylesresturants.infoContainer}>
        <Text style={stylesresturants.name}>{name}</Text>
        <View style={stylesresturants.ratingContainer}>
          <Text style={stylesresturants.rating}>{rating} * </Text>
        </View>
        <Text style={stylesresturants.deliveryTime}>{deliveryTime}</Text>
        <View style={stylesresturants.tagsContainer}>
          {tags.map((tag, index) => (
            <Text key={index} style={stylesresturants.tag}>{tag}</Text>
          ))}
        </View>
        

      </View>
    </View>
  );
};
export default FeaturedRestaurant;
