import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Placeholder profile screen. In a full implementation this could include
// user information, saved items, order history, settings, etc.

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      {/* Saved items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saved Items</Text>
        <Text style={styles.placeholderText}>You have no saved items yet.</Text>
      </View>
      {/* Order history */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order History</Text>
        <Text style={styles.placeholderText}>No past orders found.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  headerRow: {
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: '#666',
  },
});
