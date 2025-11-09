import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SlipScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Slip</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.orderNumber}>Order#p01k-2098-0tho</Text>
        <Text style={styles.orderDate}>Complete on 14 January | 19:38</Text>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Home</Text>
          <Text style={styles.address}>925 S Chugach St #APT 10, Alaska 99645</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Delivery address</Text>
          <Text style={styles.address}>2417 Tongass Ave #111, Ketchikan, Alaska 99901, USA</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.itemRow}>
            <Text style={styles.itemLine}>1× Lorem ipsum are dolor</Text>
            <Text style={styles.itemPrice}>$20,00</Text>
          </View>
        </View>
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Sub-total</Text>
            <Text style={styles.summaryValue}>$20,00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>VAT (%)</Text>
            <Text style={styles.summaryValue}>$0.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping fee</Text>
            <Text style={styles.summaryValue}>$80</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotalLabel}>Total</Text>
            <Text style={styles.summaryTotalValue}>$100,00</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
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
  content: {
    paddingHorizontal: 16,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
  },
  address: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemLine: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
  },
  summary: {
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    color: '#666',
  },
  summaryTotalLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  summaryTotalValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  doneButton: {
    backgroundColor: '#000',
    margin: 16,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
