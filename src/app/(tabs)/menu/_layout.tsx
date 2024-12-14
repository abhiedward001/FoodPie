import { Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              <FontAwesome name="shopping-basket" size={24}></FontAwesome>
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Menu' }} />
    </Stack>
  );
}
