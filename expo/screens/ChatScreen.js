import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const messages = [
    { id: '1', text: 'Lorem ipsum dolor sit amet and a consecto...', sender: 'other' },
    { id: '2', text: 'Lorem ipsum dolor', sender: 'other' },
    { id: '3', text: 'Lorem ipsum', sender: 'me' },
    { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', sender: 'me' },
  ];
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Chat</Text>
        <Ionicons name="notifications-outline" size={24} />
      </View>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((m) => (
          <View
            key={m.id}
            style={[styles.messageBubble, m.sender === 'me' ? styles.myMessage : styles.otherMessage]}
          >
            <Text style={[styles.messageText, m.sender === 'me' ? { color: '#fff' } : { color: '#000' }]}> 
              {m.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Write your message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="mic-outline" size={24} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  messagesContainer: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 12,
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const messages = [
    { id: '1', text: 'Lorem ipsum dolor sit amet and a consecto...', sender: 'other' },
    { id: '2', text: 'Lorem ipsum dolor', sender: 'other' },
    { id: '3', text: 'Lorem ipsum', sender: 'me' },
    { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', sender: 'me' },
  ];
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Chat</Text>
        <Ionicons name="notifications-outline" size={24} />
      </View>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((m) => (
          <View
            key={m.id}
            style={[styles.messageBubble, m.sender === 'me' ? styles.myMessage : styles.otherMessage]}
          >
            <Text style={[styles.messageText, m.sender === 'me' ? { color: '#fff' } : { color: '#000' }]}> 
              {m.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Write your message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="mic-outline" size={24} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  messagesContainer: {
    padding: 16,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  myMessage: {
    backgroundColor: '#000',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
});    borderRadius: 12,
    marginBottom: 8,
  },
  myMessage: {
    backgroundColor: '#000',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
});
