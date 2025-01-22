import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { TFruit } from 'utils/types.type';

interface FruitFavoriteItemProps {
  item: TFruit;
  onPress: () => void;
}

export const FruitFavoriteItem = (props: FruitFavoriteItemProps) => {
  const { item, onPress } = props;
  const { items } = useSelector((state) => state?.favorites);
  const isFavorite = items.some((favoritesItem: TFruit) => favoritesItem.id === item.id);
  return (
    <Pressable
      onPress={onPress}
      className="mr-2 w-full flex-row items-center justify-between rounded-md border-[1px] border-gray-300 bg-white p-4 active:bg-gray-200">
      <Text className="font-bold">{item?.name?.toUpperCase()}</Text>
      <FontAwesome name="star" size={24} color={isFavorite ? '#FFD700' : 'grey'} />
    </Pressable>
  );
};
