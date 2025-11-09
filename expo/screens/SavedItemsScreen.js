import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', name: 'Lorem ipsum dolor is sit amet', price: 1190, discountLabel: 'From $25 with saver' },
  { id: '2', name: 'Lorem ipsum dolor is sit amet', price: 60, discountLabel: 'From $25 with saver' },
  { id: '3', name: 'Lorem ipsum dolor is sit amet', price: 199, discountLabel: 'From $25 with saver' },
  { id: '4', name: 'Lorem ipsum dolor is sit amet', price: 89, discountLabel: 'From $25 with saver' },
];

export default function SavedItemsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.cardInfo}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.sub}>{item.discountLabel}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Saved Items</Text>
        <Ionicons name="heart-outline" size={24} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    margin: 8,
    padding: 8,
  },
  imagePlaceholder: {
    height: 120,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  cardInfo: {
    marginTop: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  sub: {
    fontSize: 12,
    color: '#666',
  },
});
