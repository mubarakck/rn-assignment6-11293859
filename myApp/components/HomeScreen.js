import { Button, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'


export default function HomeScreen() {
  return (
  
<ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/Menu.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <Image source={require('../assets/Search.png')} style={styles.searchIcon} />
        <Image source={require('../assets/shoppingBag.png')} style={styles.cartIcon} />
      </View>

      <View style={styles.gridContainer}>
        {products.map((product, index) => (
          <View key={index} style={styles.card}>
            <Image source={require('../assets/dress1.png')} style={styles.productImage} />
            <TouchableOpacity style={styles.plusButton}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const products = [
  { title: 'Office Wear', price: '$120' },
  { title: 'Black', price: '$120' },
  { title: 'Church Wear', price: '$120' },
  { title: 'Lamerel', price: '$120' },
  { title: '21WN', price: '$120' },
  { title: 'Lopo', price: '$120' },
  { title: '21WN', price: '$120' },
  { title: 'Lame', price: '$120' },
];


  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    menuIcon: {
      width: 24,
      height: 24,
    },
    logo: {
      width: 100,
      height: 40,
    },
    searchIcon:{
      width: 24,
      height: 24,
      marginRight: '50',
    },
    cartIcon: {
      width: 24,
      height: 24,
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
    productImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    plusButton: {
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
    plusText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    productTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    productPrice: {
      fontSize: 14,
      color: 'red',
    },
  });
  