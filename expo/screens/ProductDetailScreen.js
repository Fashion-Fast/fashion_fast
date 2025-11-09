import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params || { product: {} };
  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.ratingText}>{product.rating}</Text>
          <Text style={styles.reviewText}> ({product.reviews})</Text>
        </View>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.saver}>{product.saver}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  star: {
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#000',
  },
  reviewText: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  saver: {
    fontSize: 12,
    color: '#888',
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});