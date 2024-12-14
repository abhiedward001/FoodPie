import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import products from '@/assets/data/products';
import Button from '@/src/components/button';
import { colors } from '@/src/constants/Colors';
import { spacing } from '@/src/constants/Spacing';

const pizzaSizeArray = ['Sm', 'Md', 'Lg', 'Xl'];

const FoodDetails = () => {
  const [selectedSize, setSelectedSize] = React.useState('Md');
  console.log('@@selectedSize', selectedSize);
  const { id } = useLocalSearchParams();
  const data = products.find((item) => item.id.toString() === id);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${data?.image.toString()}`,
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
      <Button onPress={() => console.log('add')} text="Add to cart" />
    </View>
  );
};

export default FoodDetails;

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
