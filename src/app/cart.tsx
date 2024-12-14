import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform } from 'react-native';
import CartListItem from '../components/CartListItem';
import { useCartContext } from '../contexts/cart-provider';

const cart = () => {
  const { items } = useCartContext();

  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <FlatList data={items} renderItem={({ item }) => <CartListItem cartItem={item} />} />
    </>
  );
};

export default cart;
