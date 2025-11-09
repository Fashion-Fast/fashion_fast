import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

// A simple checkout screen that allows selection of address and payment method
// and displays an order summary. Values are static for demonstration purposes.

export default function CheckoutScreen({ navigation }) {
  const [selectedAddress, setSelectedAddress] = useState('Home');
  const [selectedPayment, setSelectedPayment] = useState('Card');

  // dummy cost values; in a real app these would be passed from cart or computed
  const subTotal = 20.0;
  const vat = 0.0;
  const shipping = 80.0;
  const total = subTotal + vat + shipping;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      {/* Delivery Address Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <TouchableOpacity
          style={[styles.addressRow, selectedAddress === 'Home' && styles.addressRowSelected]}
          onPress={() => setSelectedAddress('Home')}
        >
          <View>
            <Text style={styles.addressLabel}>Home</Text>
            <Text style={styles.addressDetail}>123 Main St, Springfield</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addressRow, selectedAddress === 'Office' && styles.addressRowSelected]}
          onPress={() => setSelectedAddress('Office')}
        >
          <View>
            <Text style={styles.addressLabel}>Office</Text>
            <Text style={styles.addressDetail}>456 Business Rd, Springfield</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addressRow, selectedAddress === 'Apartment' && styles.addressRowSelected]}
          onPress={() => setSelectedAddress('Apartment')}
        >
          <View>
            <Text style={styles.addressLabel}>Apartment</Text>
            <Text style={styles.addressDetail}>789 Apartment Ln, Springfield</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addAddressButton}
          onPress={() => {/* handle adding a new address */}}
        >
          <Text style={styles.addAddressText}>+ Add New Address</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Method Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.paymentOptions}>
          <TouchableOpacity
            style={[styles.paymentOption, selectedPayment === 'Card' && styles.paymentOptionSelected]}
            onPress={() => setSelectedPayment('Card')}
          >
            <Text style={styles.paymentLabel}>Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.paymentOption, selectedPayment === 'Cash' && styles.paymentOptionSelected]}
            onPress={() => setSelectedPayment('Cash')}
          >
            <Text style={styles.paymentLabel}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.paymentOption, selectedPayment === 'ApplePay' && styles.paymentOptionSelected]}
            onPress={() => setSelectedPayment('ApplePay')}
          >
            <Text style={styles.paymentLabel}>Apple Pay</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Summary Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Sub-total</Text>
          <Text style={styles.summaryValue}>${subTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>VAT (%)</Text>
          <Text style={styles.summaryValue}>${vat.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping fee</Text>
          <Text style={styles.summaryValue}>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={() => {
          // For demonstration, navigate to a placeholder next step.
          // In a real app this might trigger an order API call and then navigate to order confirmation/track order screen
          navigation.navigate('ShopperTabs');
        }}
      >
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginBottom: 12,
  },
  addressRow: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  addressRowSelected: {
    borderWidth: 2,
    borderColor: '#000',
  },
  addressLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  addressDetail: {
    fontSize: 12,
    color: '#666',
  },
  addAddressButton: {
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    marginTop: 8,
  },
  addAddressText: {
    fontSize: 14,
    color: '#000',
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentOption: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  paymentOptionSelected: {
    borderColor: '#000',
    backgroundColor: '#F0F0F0',
  },
  paymentLabel: {
    fontSize: 14,
    fontWeight: '600',
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
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  placeOrderButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
