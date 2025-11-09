import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CallScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Jacob Jones</Text>
        <Text style={styles.timer}>00:29</Text>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="mic-off" size={24} color="#fff" />
          <Text style={styles.buttonLabel}>mute</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="keypad-outline" size={24} color="#fff" />
          <Text style={styles.buttonLabel}>keypad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="volume-high-outline" size={24} color="#fff" />
          <Text style={styles.buttonLabel}>audio</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="add" size={24} color="#fff" />
          <Text style={styles.buttonLabel}>add call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="videocam-outline" size={24} color="#fff" />
          <Text style={styles.buttonLabel}>FaceTime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.buttonLabel}>contacts</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.endCallButton}>
        <Ionicons name="call" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#444',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
  },
  timer: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  iconButton: {
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    textTransform: 'lowercase',
  },
  endCallButton: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});
