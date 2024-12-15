import { FlatList } from 'react-native';

import products from '@/assets/data/products';
import { spacing } from '@/src/constants/Spacing';
import { ProductListItem, ProductListItemProps } from '@/src/components/ProductListItem';

export default function TabOneScreen() {
  const renderItemList = ({ item }: { item: ProductListItemProps }) => {
    return <ProductListItem product={item} />;
  };
  return (
    <FlatList
      data={products}
      numColumns={2}
      style={{
        padding: spacing.sm,
      }}
      contentContainerStyle={{
        gap: spacing.sm,
      }}
      columnWrapperStyle={{
        gap: spacing.md,
      }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItemList}
    />
  );
}
