import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Sample data for categories and products
const categories = [
  { label: 'Big Promo', icon: '🎁' },
  { label: 'Near Me', icon: '📍' },
  { label: 'Best Seller', icon: '⭐' },
  { label: '24 Hours', icon: '⏰' },
];

const products = [
  {
    name: 'Lorem ipsum dolor sit amet',
    image: require('../assets/onboarding.jpg'),
    price: '$60',
    rating: 4.9,
    reviews: '200+',
    saver: 'From $25 with saver',
  },
  {
    name: 'Stylish Dress',
    image: require('../assets/onboarding.jpg'),
    price: '$45',
    rating: 4.8,
    reviews: '150+',
    saver: 'From $20 with saver',
  },
  {
    name: 'Casual Shirt',
    image: require('../assets/onboarding.jpg'),
    price: '$30',
    rating: 4.7,
    reviews: '320+',
    saver: 'From $15 with saver',
  },
  {
    name: 'Denim Jacket',
    image: require('../assets/onboarding.jpg'),
    price: '$80',
    rating: 4.9,
    reviews: '98+',
    saver: 'From $40 with saver',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Location and icons */}
      <View style={styles.row}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>Current Location</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🔔</Text>
        </TouchableOpacity>
      </View>
      {/* Search bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for clothes..."
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>≡</Text>
        </TouchableOpacity>
      </View>
      {/* Hero banner */}
      <View style={styles.banner}>
        <Image source={require('../assets/onboarding.jpg')} style={styles.bannerImage} />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>MEN FASHION</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Categories */}
      <View style={styles.categoryList}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.label}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginRight: index === categories.length - 1 ? 0 : 16,
                alignItems: 'center',
              }}
            >
              <View style={styles.categoryIconWrapper}>
                <Text style={styles.categoryIcon}>{item.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          )}
        />
      </View>
      {/* Best deals */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Deals</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productGrid}>
        {products.map((product, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product })}
          >
            <Image source={product.image} style={styles.productImage} />
            <View style={{ padding: 8 }}>
              <Text style={styles.productName} numberOfLines={2}>
                {product.name}
              </Text>
              <View style={styles.ratingRow}>
                <Text style={styles.star}>⭐</Text>
                <Text style={styles.ratingText}>{product.rating}</Text>
                <Text style={styles.reviewText}> ({product.reviews})</Text>
              </View>
              <Text style={styles.productPrice}>{product.price}</Text>
              <Text style={styles.productSaver}>{product.saver}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 6,
    fontSize: 16,
  },
  locationText: {
    fontSize: 12,
    color: '#333',
  },
  iconButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  iconText: {
    fontSize: 16,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  filterButton: {
    height: 48,
    width: 48,
    backgroundColor: '#000',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  filterText: {
    color: '#fff',
    fontSize: 20,
  },
  banner: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  bannerButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  bannerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  categoryList: {
    marginBottom: 16,
  },
  categoryIconWrapper: {
    height: 48,
    width: 48,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryLabel: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  viewAll: {
    fontSize: 14,
    color: '#007AFF',
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#F7F7F7',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  star: {
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#000',
  },
  reviewText: {
    fontSize: 12,
    color: '#888',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  productSaver: {
    fontSize: 10,
    color: '#888',
  },
});