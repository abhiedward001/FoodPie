import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';

const cart = () => {
  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View>
        <Text>cart</Text>
      </View>
    </>
  );
};

export default cart;
