import { Link, Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { spacing } from '@/src/constants/Spacing';
import { useCartContext } from '@/src/contexts/cart-provider';

export default function MenuStack() {
  const { items } = useCartContext();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Menu',
          headerRight: () => (
            <Link href="/cart" asChild>
              <Pressable>
                <FontAwesome name="plus-square-o" size={24}></FontAwesome>
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Menu',
          headerRight: () => (
            <Link href="/cart" asChild>
              <Pressable>
                <FontAwesome name="pencil" size={24}></FontAwesome>
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
