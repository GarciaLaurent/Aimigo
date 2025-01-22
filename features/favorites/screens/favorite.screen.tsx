import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { Container } from 'components/container.component';
import { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { BottomSheetFruitDetails } from '../components/bottom-sheet/bottom-sheet-fruit-details.component';
import { EmptyFavorite } from '../components/empty-favorite.component';
import { FruitFavoriteItem } from '../components/fruit-favorite-item.component';

export default function FavoriteScreen() {
  const { items } = useSelector((state) => state?.favorites);
  const bottomSheetModalRef = useRef(null);
  const [fruit, setFruit] = useState<string>('');

  const handleOnPress = (item) => {
    setFruit(item);
    bottomSheetModalRef.current?.present();
  };

  return (
    <Container>
      <View className="m-4">
        <Text className="text-center text-xl font-bold">Favoris</Text>
      </View>
      {items?.length > 0 ? (
        <View className="mt-3 w-full flex-1">
          <FlatList
            data={items}
            keyExtractor={(item) => item?.id?.toString()}
            renderItem={({ item }) => (
              <View key={item?.id?.toString()}>
                <FruitFavoriteItem item={item} onPress={() => handleOnPress(item)} />
              </View>
            )}
            ItemSeparatorComponent={() => <View className="h-4" />}
            ListEmptyComponent={<EmptyFavorite />}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => <View className="h-2" />}
          />
        </View>
      ) : (
        <View className="flex-1 items-center justify-center">
          <EmptyFavorite />
        </View>
      )}
      <BottomSheetModal ref={bottomSheetModalRef} index={0}>
        <BottomSheetView className="w-full flex-1">
          <BottomSheetFruitDetails item={fruit} />
        </BottomSheetView>
      </BottomSheetModal>
    </Container>
  );
}
