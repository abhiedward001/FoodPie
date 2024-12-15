import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { typography } from '../constants/typography';
import { spacing } from '../constants/Spacing';
import { radius } from '../constants/Radius';
import { Link } from 'expo-router';
import { colors } from '../constants/Colors';

export interface ProductListItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

export const ProductListItem: React.FC<{ product: ProductListItemProps }> = ({ product }) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{
            uri: `${product.image}`,
          }}
          style={{
            width: '100%',
            aspectRatio: 1,
          }}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{`₹${product.price}`}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '50%',
    borderWidth: 1,
    alignItems: 'center',
    padding: spacing.sm,
    borderRadius: radius.xl,
    justifyContent: 'center',
    borderColor: colors.palette.grey200,
  },
  name: {
    fontSize: typography.size.sm.fontSize,
    fontWeight: 'bold',
  },
  price: {
    fontSize: typography.size.xs.fontSize,
    fontWeight: 'thin',
    color: colors.palette.info600,
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
