import React from 'react';
import { useRouter } from 'expo-router';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

import { Product } from '../types';
import Button from '@/src/components/button';
import { colors } from '../constants/Colors';
import { spacing } from '../constants/Spacing';
import { typography } from '../constants/typography';
import { useCartContext } from '../contexts/cart-provider';

const pizzaSizeArray = ['Sm', 'Md', 'Lg', 'Xl'];

export interface ProductDescriptionProps {
  data?: Product;
}
const ProductDescription: React.FC<ProductDescriptionProps> = ({ data }) => {
  const router = useRouter();
  const { addItems } = useCartContext();
  // const [selectedSize, setSelectedSize] = React.useState('Md');

  return (
    <View style={styles.container}>
      <>
        <Image
          source={{
            uri: `${data?.image?.toString()}`,
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.price}>Price: ₹{data?.price.toFixed(2)}</Text>
      </>
      {/* <View style={styles.pizzaSizesContainer}>
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
      </View> */}

      <Button
        onPress={() => {
          addItems(data!, selectedSize);
          router.push('/cart');
        }}
        text="Add to cart"
      />
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    // borderWidth: 1,
  },
  pizzaSizesContainer: {
    // borderWidth: 1,
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
    fontSize: typography.size.md.fontSize,
    fontFamily: typography.fonts.interFont.bold,
  },
});
