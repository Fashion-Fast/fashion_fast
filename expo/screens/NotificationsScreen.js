import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    section: 'Today',
    title: '30% Special Discount!',
    message: 'Special promotion only valid today.',
    icon: 'pricetag-outline',
  },
  {
    id: '2',
    section: 'Yesterday',
    title: 'Top Up E-wallet Successfully!',
    message: 'You have top up your e-wallet.',
    icon: 'wallet-outline',
  },
  {
    id: '3',
    section: 'Yesterday',
    title: 'New Service Available!',
    message: 'Now you can track order in real-time.',
    icon: 'notifications-outline',
  },
  {
    id: '4',
    section: 'June 7, 2023',
    title: 'Credit Card Connected!',
    message: 'Credit card has been linked.',
    icon: 'card-outline',
  },
  {
    id: '5',
    section: 'June 7, 2023',
    title: 'Account Setup Successfully!',
    message: 'Your account has been created.',
    icon: 'person-outline',
  },
];

export default function NotificationsScreen() {
  // Group notifications by section
  const sections = {};
  notifications.forEach((item) => {
    if (!sections[item.section]) sections[item.section] = [];
    sections[item.section].push(item);
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>Notifications</Text>
        <Ionicons name="notifications-outline" size={24} />
      </View>
      {Object.keys(sections).map((sec) => (
        <View key={sec} style={styles.section}>
          <Text style={styles.sectionTitle}>{sec}</Text>
          {sections[sec].map((item) => (
            <View key={item.id} style={styles.item}>
              <Ionicons name={item.icon} size={20} style={{ marginRight: 12 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMessage}>{item.message}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
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
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemMessage: {
    fontSize: 12,
    color: '#666',
  },
});
