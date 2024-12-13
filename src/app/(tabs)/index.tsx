import { StyleSheet, FlatList} from 'react-native';

import products from '@/assets/data/products';
import { typography } from '@/src/constants/typography';
import { ProductListItem, ProductListItemProps } from '@/src/components/ProductListItem';
import { spacing } from '@/src/constants/Spacing';


export default function TabOneScreen() {

  const renderItemList = ({item}:{item:ProductListItemProps}) => {
    return (
      <ProductListItem product={ item } />
    )
  }
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerStyle={{
        gap:spacing.sm
      }}
      columnWrapperStyle={{
        gap:spacing.md
      }}
      keyExtractor={item => item.id.toString()}
    renderItem={renderItemList}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1
  },
  title: {
    fontSize: typography.size.md.fontSize,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
