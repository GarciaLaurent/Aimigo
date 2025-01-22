import { SearchFruitItem } from 'features/home/components/search-fruit-item.component';
import { View, Text, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

export default function FavoriteScreen() {
  const { items } = useSelector((state) => state?.favorites);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center">
        <Text className="text-xl font-bold">Favoris</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({ item }) => (
            <View key={item?.id?.toString()}>
              <SearchFruitItem item={item} />
            </View>
          )}
          ItemSeparatorComponent={() => <View className="h-4" />}
          ListEmptyComponent={
            <View className="w-full flex-1 items-center justify-center">
              <Text className="text-center text-lg font-bold">Aucun favoris</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => <View className="h-4" />}
        />
      </View>
    </SafeAreaView>
  );
}
