import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/onboarding.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Your Look, At Your Door Same Day</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.outlineButtonText}>Drive Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  outlineButton: {
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 8,
  },
  outlineButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
