import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function CartScreen() {
  return (
    <View style={styles.CartScreenPage}>
      <Text>CartScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  CartScreenPage: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});