import { Text, View } from 'react-native';
import { TFruit } from 'utils/types.type';

interface FruitDetailsProps {
  item: TFruit;
}

export const BottomSheetFruitDetails = (props: FruitDetailsProps) => {
  const { item } = props;
  return (
    <View className="m-6 flex-1 p-4">
      <Text className="font-bold text-black">{item?.name?.toUpperCase()}</Text>
      <View className="mt-4 ">
        <Text className="mb-2 font-bold underline">Etymology</Text>
        <View>
          <Text className="font-bold ">Genus: {item?.genus}</Text>
          <Text className="font-bold ">Family: {item?.family}</Text>
          <Text className="font-bold ">Order: {item?.order}</Text>
        </View>
      </View>
      <View className="mt-6">
        <Text className="mb-2 font-bold underline">Nutritions</Text>
        <View>
          <Text className="mb-2 font-bold">Protein: {item?.nutritions?.protein}/100g</Text>
          <Text className="mb-2 font-bold">Fat: {item?.nutritions?.fat}/100g</Text>
          <Text className="mb-2 font-bold">Calories: {item?.nutritions?.calories}/100g</Text>
          <Text className="mb-2 font-bold">Sugar: {item?.nutritions?.sugar}/100g</Text>
        </View>
      </View>
    </View>
  );
};
