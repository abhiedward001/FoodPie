import { Link, Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { spacing } from '@/src/constants/Spacing';
import { useCartContext } from '@/src/contexts/cart-provider';

export default function MenuStack() {
  const { items } = useCartContext();
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable
              style={{
                padding: spacing.xs,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <FontAwesome name="shopping-basket" size={24}></FontAwesome>
              <Text>{`${items.length}`}</Text>
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Menu' }} />
    </Stack>
  );
}
