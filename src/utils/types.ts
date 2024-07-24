import {ImageSourcePropType } from 'react-native';

export interface FeaturedRestaurantProps {
    imageSource: ImageSourcePropType;
    name: string;
    rating: number;
    deliveryTime: string;
    tags: string[];
  }
  export interface MenuitemsProps {
    source: ImageSourcePropType;
    title: string;
  }