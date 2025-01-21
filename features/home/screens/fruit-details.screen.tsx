import { BackButton } from 'components/BackButton';
import { View, Text, SafeAreaView } from 'react-native';

import { FruitDetails } from '../components/fruit-details.component';

export default function FruitDetailsScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center w-full">
        <BackButton onPress={navigation.goBack} />
        <Text className="text-2xl font-bold text-center text-black">Détails du fruit</Text>
      </View>
      <FruitDetails item={item} />
    </SafeAreaView>
  );
}
