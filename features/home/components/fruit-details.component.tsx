import { toggleFavorites } from 'features/favorites/data/favoritesSlice';
import { View, Text } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

interface FruitDetailsProps {
  item: any;
}

export const FruitDetails = (props: FruitDetailsProps) => {
  const { item } = props;
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state?.favorites);
  const ifExists = items.some((favItem) => favItem.id === item.id);

  const handleFavorite = () => {
    dispatch(toggleFavorites(item));
  };

  return (
    <View className="flex-1 p-4">
      <Text className="font-bold ">{item?.name?.toUpperCase()}</Text>
      <Text className="font-bold ">Genus: {item?.genus}</Text>
      <Text className="font-bold ">Family: {item?.family}</Text>
      <Text className="font-bold ">Order: {item?.order}</Text>
      <View>
        <Text className="font-bold">Nutritions</Text>
        <View>
          <Text className="font-bold ">Carbohydrates: {item?.nutritions?.carbohydrates}</Text>
          <Text className="font-bold ">Protein: {item?.nutritions?.protein}</Text>
          <Text className="font-bold ">Fat: {item?.nutritions?.fat}</Text>
          <Text className="font-bold ">Calories: {item?.nutritions?.calories}</Text>
          <Text className="font-bold ">Sugar: {item?.nutritions?.sugar}</Text>
        </View>
      </View>
      <View>
        <Pressable
          onPress={handleFavorite}
          className={`${ifExists ? 'bg-red-500' : 'bg-green-500'} w-full flex-1 items-center p-4`}>
          <Text className="p-2 text-center">
            {ifExists ? 'Supprimer des' : 'Ajouter aux'} favoris
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
