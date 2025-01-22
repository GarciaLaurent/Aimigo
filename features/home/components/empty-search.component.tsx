import { Text, View } from 'react-native';

export const EmptySearch = () => {
  return (
    <View className="w-full flex-1 items-center justify-center">
      <Text className="text-center text-lg font-bold">
        Aucun résultat ne correspond à votre recherche
      </Text>
    </View>
  );
};
