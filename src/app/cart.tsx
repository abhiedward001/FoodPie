import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, View, Text } from 'react-native';

import Button from '../components/button';
import { spacing } from '../constants/Spacing';
import CartListItem from '../components/CartListItem';
import { useCartContext } from '../contexts/cart-provider';

const cart = () => {
  const { items, totalAmount } = useCartContext();

  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {items.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Oops, your cart seems empty.
          </Text>
        </View>
      ) : (
        <>
          <View
            style={{
              flex: 1,
              margin: spacing.sm,
            }}
          >
            <FlatList data={items} renderItem={({ item }) => <CartListItem cartItem={item} />} />
            <Text>Total Amount:- {`₹${Math.ceil(totalAmount)}`}</Text>
            <Button text="Checkout" />
          </View>
        </>
      )}
    </>
  );
};

export default cart;
