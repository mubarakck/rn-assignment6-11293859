import { Button, View, SafeAreaView, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const addToCart = async (product) => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      const cartItems = cart ? JSON.parse(cart) : [];
      cartItems.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('Product added to cart:', product);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <View style={styles.gridContainer}>
          {products.map((product, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.imageContainer}>
                <Image source={product.image} style={styles.productImage} />
                <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(product)}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addToCartIcon} />
                </TouchableOpacity>
              </View>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productDescription}>reversible angora cardigan</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const products = [
  { title: 'Office Wear', price: '$120', image: require('../assets/dress1.png') },
  { title: 'Black', price: '$120', image: require('../assets/dress2.png') },
  { title: 'Church Wear', price: '$120', image: require('../assets/dress3.png') },
  { title: 'Lamerei', price: '$120', image: require('../assets/dress4.png') },
  { title: '21WN', price: '$120', image: require('../assets/dress5.png') },
  { title: 'Lopo', price: '$120', image: require('../assets/dress6.png') },
  { title: '21WN', price: '$120', image: require('../assets/dress7.png') },
  { title: 'Lame', price: '$120', image: require('../assets/dress3.png') },
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartIcon: {
    width: 20,
    height: 20,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 14,
    color: 'gray',
  },
  productPrice: {
    fontSize: 14,
    color: 'red',
  },
});