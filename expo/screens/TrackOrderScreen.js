import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TrackOrderScreen() {
  const status = [
    {
      id: '1',
      stage: 'Packing',
      address: '2336 Jack Warren Rd, Delta Junction, Alaska 99737',
    },
    {
      id: '2',
      stage: 'Picked',
      address: '2417 Tongass Ave #111, Ketchikan, Alaska 99901',
    },
    {
      id: '3',
      stage: 'In Transit',
      address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
    },
    {
      id: '4',
      stage: 'Delivered',
      address: '925 S Chugach St #APT 10, Alaska 99645',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Track Order</Text>
        <Ionicons name="notifications-outline" size={24} />
      </View>
      <View style={styles.mapPlaceholder} />
      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>Order Status</Text>
        {status.map((item) => (
          <View key={item.id} style={styles.statusItem}>
            <Ionicons name="ellipse-outline" size={12} style={{ marginRight: 8 }} />
            <View>
              <Text style={styles.stage}>{item.stage}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>
          </View>
        ))}
        <View style={styles.driverInfo}>
          <Ionicons name="person-circle-outline" size={24} style={{ marginRight: 8 }} />
          <View>
            <Text style={styles.driverName}>Jacob Jones</Text>
            <Text style={styles.driverRole}>Delivery Guy</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
  mapPlaceholder: {
    height: 200,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#eee',
    marginBottom: 16,
  },
  statusContainer: {
    paddingHorizontal: 16,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  stage: {
    fontSize: 14,
    fontWeight: '600',
  },
  address: {
    fontSize: 12,
    color: '#666',
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  driverName: {
    fontSize: 14,
    fontWeight: '600',
  },
  driverRole: {
    fontSize: 12,
    color: '#666',
  },
});
