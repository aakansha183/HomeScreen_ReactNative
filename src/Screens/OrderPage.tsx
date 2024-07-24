import React from 'react';
import {Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import FeaturedRestaurant from '../components/Resturants';
import Header from '../components/Header';
import Menuitems from '../components/Menuitems';
import stylesorderpage from '../Styling/OrderpageStyle';
const items = [
  { source: require('../Assests/b1.png'), title: 'Burger' },
  { source: require('../Assests/b2.png'), title: 'Donut' },
  { source: require('../Assests/b3.png'), title: 'Pizza' },
  { source: require('../Assests/b4.png'), title: 'Mexican' },
  { source: require('../Assests/b5.png'), title: 'Asian' },
];
const items1 = [
  {
    imageSource: require('../Assests/R1.png'),
    name: 'McDonald\'s',
    rating: 4.5,
    deliverystatus: 'Freedelivery',
    deliverytime:'10-15 mins',

    tags: ['BURGER','CHICKEN','FAST FOOD'],
  },
];
const OrderPage: React.FC = () => {
  return (
    <View style={stylesorderpage.container}>
      <Header />
      <Text style={stylesorderpage.title}>What would you like to order</Text>
      <SearchBar />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={stylesorderpage.scrollViewContent}>
        {items.map((item, index) => (
          <Menuitems key={index} source={item.source} title={item.title} />
        ))}
      </ScrollView>
      <Text style={stylesorderpage.featuredTitle}>Featured Restaurants</Text>
    <Text style={stylesorderpage.title1}>View all</Text>


      {items1.map((item, index) => (
        <FeaturedRestaurant
          key={index}
          imageSource={item.imageSource}
          name={item.name}
          rating={item.rating}
          deliveryTime={item.deliverytime}
          tags={item.tags}
        />
      ))}
    </View>
  );
};
export default OrderPage;
