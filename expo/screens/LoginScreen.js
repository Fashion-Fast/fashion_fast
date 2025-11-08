import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account</Text>
      <Text style={styles.subtitle}>It's great to see you again.</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Text style={styles.toggle}>{secure ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={{ alignSelf: 'flex-end', marginBottom: 16 }}
      >
        <Text style={styles.link}>Reset your password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShopperTabs')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.socialText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbButton}>
        <Text style={styles.socialText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ marginTop: 20 }}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F7F7F7',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 12,
    height: 48,
  },
  toggle: {
    color: '#007AFF',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  or: {
    marginHorizontal: 8,
    color: '#666',
  },
  googleButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  fbButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 14,
    borderRadius: 8,
  },
  socialText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#007AFF',
    textAlign: 'center',
  },
});
