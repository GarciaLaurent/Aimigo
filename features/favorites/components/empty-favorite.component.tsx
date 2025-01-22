import { Text, View } from 'react-native';

export const EmptyFavorite = () => {
  return (
    <View className="w-full flex-1 items-center justify-center">
      <Text className="text-center text-lg font-bold">Aucun fruit en favoris</Text>
    </View>
  );
};
