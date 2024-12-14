import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

import { Product } from '../types';
import Button from '@/src/components/button';
import { spacing } from '../constants/Spacing';
import { colors } from '@/src/constants/Colors';
import { useCartContext } from '../contexts/cart-provider';
import { useRouter } from 'expo-router';

const pizzaSizeArray = ['Sm', 'Md', 'Lg', 'Xl'];

export interface ProductDescriptionProps {
  data?: Product;
}
const ProductDescription: React.FC<ProductDescriptionProps> = ({ data }) => {
  const router = useRouter();
  const { addItems } = useCartContext();
  const [selectedSize, setSelectedSize] = React.useState('Md');

  return (
    <>
      <Image
        source={{
          uri: `${data?.image?.toString()}`,
        }}
        style={styles.image}
      />

      <View style={styles.pizzaSizesContainer}>
        {pizzaSizeArray.map((eachPizzaSize, index) => {
          return (
            <Pressable
              style={[
                styles.pizzaSizes,
                {
                  backgroundColor:
                    eachPizzaSize === selectedSize ? colors.palette.black : colors.palette.grey200,
                },
              ]}
              key={index}
              onPress={() => setSelectedSize(eachPizzaSize)}
            >
              <Text
                style={{
                  color:
                    eachPizzaSize === selectedSize ? colors.palette.white100 : colors.palette.black,
                }}
              >
                {eachPizzaSize}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.price}>Price: ₹{data?.price.toFixed(2)}</Text>
      <Button
        onPress={() => {
          addItems(data!, selectedSize);
          router.push('/cart');
        }}
        text="Add to cart"
      />
    </>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sm,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  pizzaSizesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pizzaSizes: {
    width: spacing.xl,
    borderRadius: 16,
    height: spacing.xl,
    alignItems: 'center',
    padding: spacing.xxs,
    justifyContent: 'center',
    backgroundColor: colors.palette.grey200,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});
