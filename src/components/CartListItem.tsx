import React from 'react';
import { CartItem } from '../types';
import Colors from '../constants/Colors';
import { View, Text, StyleSheet, Image } from 'react-native';

import { radius } from '../constants/Radius';
import { spacing } from '../constants/Spacing';
import { FontAwesome } from '@expo/vector-icons';
import { useCartContext } from '../contexts/cart-provider';

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const { updateItems } = useCartContext();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: cartItem.product.image || '' }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{cartItem.product.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>₹{cartItem.product.price.toFixed(2)}</Text>
          <Text>Size: {cartItem.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <FontAwesome
          onPress={() => updateItems(cartItem.id, -1)}
          name="minus"
          color="gray"
          style={{ padding: 5 }}
        />

        <Text style={styles.quantity}>{cartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateItems(cartItem.id, 1)}
          name="plus"
          color="gray"
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: radius.xl,
    marginVertical: spacing.xxs,
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: 'center',
    marginRight: spacing.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: spacing.xxs,
  },
  subtitleContainer: {
    gap: 5,
    flexDirection: 'row',
  },
  quantitySelector: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '500',
  },
  price: {
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
});

export default CartListItem;
