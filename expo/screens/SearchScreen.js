import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const hasResults = false; // currently no search results
  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="arrow-back" size={24} style={{ marginRight: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={query}
          onChangeText={setQuery}
        />
        <Ionicons name="mic-outline" size={20} style={{ marginLeft: 8 }} />
      </View>
      {/* Content */}
      <View style={styles.content}>
        {hasResults ? (
          <Text style={styles.placeholder}>Results would appear here</Text>
        ) : (
          <View style={styles.noResult}>
            <Ionicons name="search-outline" size={48} color="#ccc" />
            <Text style={styles.noResultTitle}>No Results Found!</Text>
            <Text style={styles.noResultSubtitle}>
              Try a similar word or something more general.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResult: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 16,
  },
  noResultSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
