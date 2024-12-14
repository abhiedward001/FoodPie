import React from 'react';
import { View, StyleSheet } from 'react-native';

import products from '@/assets/data/products';
import { spacing } from '@/src/constants/Spacing';
import { useLocalSearchParams } from 'expo-router';
import ProductDescription from '@/src/components/ProductDescription';

const FoodDetails = () => {
  const { id } = useLocalSearchParams();
  const data = products.find((item) => item.id.toString() === id);

  return (
    <View style={styles.container}>
      <ProductDescription data={data} />
    </View>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sm,
  },
});
