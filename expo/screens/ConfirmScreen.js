import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConfirmScreen() {
  const [nickname, setNickname] = useState('Home');
  const [fullAddress, setFullAddress] = useState('925 S Chugach St #APT 10, Alaska 99645');
  const [defaultAddress, setDefaultAddress] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.mapPlaceholder} />
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Address Nickname</Text>
          <TextInput
            style={styles.input}
            value={nickname}
            onChangeText={setNickname}
            placeholder="Home"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Full Address</Text>
          <TextInput
            style={styles.input}
            value={fullAddress}
            onChangeText={setFullAddress}
            placeholder="Enter full address"
          />
        </View>
        <TouchableOpacity
          onPress={() => setDefaultAddress(!defaultAddress)}
          style={styles.checkboxRow}
        >
          <Ionicons
            name={defaultAddress ? 'checkbox' : 'square-outline'}
            size={20}
            style={{ marginRight: 8 }}
          />
          <Text>Make this as a default address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapPlaceholder: {
    height: '50%',
    backgroundColor: '#eee',
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -20,
    padding: 16,
  },
  row: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  orderButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
