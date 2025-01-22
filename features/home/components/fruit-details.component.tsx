import { toggleFavorites } from 'features/favorites/data/favoritesSlice';
import { View, Text } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { TFruit } from 'utils/types.type';

interface FruitDetailsProps {
  item: TFruit;
}

export const FruitDetails = (props: FruitDetailsProps) => {
  const { item } = props;
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state?.favorites);
  const ifExists = items.some((favItem: TFruit) => favItem.id === item.id);

  const handleFavorite = () => {
    dispatch(toggleFavorites(item));
  };

  return (
    <View className="mt-6 flex-1 p-4">
      <View className="justify-center bg-gray-100">
        <View className="self-start rounded-lg bg-gray-300 p-4">
          <Text className="font-bold text-black">{item?.name?.toUpperCase()}</Text>
        </View>
      </View>
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
          <Text className="mb-2 font-bold">
            Carbohydrates: {item?.nutritions?.carbohydrates}/100g
          </Text>
          <Text className="mb-2 font-bold">Protein: {item?.nutritions?.protein}/100g</Text>
          <Text className="mb-2 font-bold">Fat: {item?.nutritions?.fat}/100g</Text>
          <Text className="mb-2 font-bold">Calories: {item?.nutritions?.calories}/100g</Text>
          <Text className="mb-2 font-bold">Sugar: {item?.nutritions?.sugar}/100g</Text>
        </View>
      </View>
      <Pressable onPress={handleFavorite}>
        <View
          className={`${ifExists ? 'bg-red-500' : 'bg-green-500'} mt-2 w-full items-center rounded-lg p-1`}>
          <Text className="p-2 text-center font-semibold text-white">
            {ifExists ? 'Supprimer des' : 'Ajouter aux'} favoris
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
