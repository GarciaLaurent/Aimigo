import { BackButton } from 'components/BackButton';
import { Container } from 'components/Container';
import { View, Text, SafeAreaView } from 'react-native';

import { FruitDetails } from '../components/fruit-details.component';

export default function FruitDetailsScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <Container>
      <View className="flex-row">
        <BackButton onPress={navigation.goBack} />
        <Text className="text-2xl font-bold text-black">Détails du fruit</Text>
      </View>
      <FruitDetails item={item} />
    </Container>
  );
}
