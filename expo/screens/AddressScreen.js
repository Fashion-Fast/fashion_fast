import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddressScreen() {
  const [selected, setSelected] = useState('home');
  const addresses = [
    {
      id: 'home',
      label: 'Home',
      address: '925 S Chugach St #APT 10, Alaska 99645',
    },
    {
      id: 'office',
      label: 'Office',
      address: '2438 6th Ave, Ketchikan, Alaska 99901',
    },
    {
      id: 'apartment',
      label: 'Apartment',
      address: '2551 Vista Dr #B301, Juneau, Alaska',
    },
    {
      id: 'parent',
      label: "Parent’s House",
      address: '4821 Ridge Top Cir, Anchorage, Alaska',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Address</Text>
        <Ionicons name="notifications-outline" size={24} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.savedTitle}>Saved Address</Text>
        {addresses.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.addressCard}
            onPress={() => setSelected(item.id)}
          >
            <Ionicons name="location-outline" size={20} style={{ marginRight: 12 }} />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.cardLabel}>{item.label}</Text>
                {item.id === 'home' && (
                  <View style={styles.defaultTag}>
                    <Text style={styles.defaultTagText}>Default</Text>
                  </View>
                )}
              </View>
              <Text style={styles.cardAddress} numberOfLines={1}>
                {item.address}
              </Text>
            </View>
            <Ionicons
              name={selected === item.id ? 'radio-button-on' : 'radio-button-off'}
              size={20}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addNewButton}>
          <Ionicons name="add" size={20} style={{ marginRight: 8 }} />
          <Text style={styles.addNewText}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
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
  savedTitle: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '700',
    marginRight: 8,
  },
  defaultTag: {
    backgroundColor: '#eee',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  defaultTagText: {
    fontSize: 10,
    color: '#666',
  },
  cardAddress: {
    fontSize: 12,
    color: '#666',
  },
  addNewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  addNewText: {
    fontSize: 14,
    fontWeight: '600',
  },
  applyButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
