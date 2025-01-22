import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StarAnimated } from 'components/star-animated-component';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { TFruit } from 'utils/types.type';

interface SearchFruitItemProps {
  item: TFruit;
}

export const SearchFruitItem = (props: SearchFruitItemProps) => {
  const { item } = props;
  const navigation = useNavigation();
  const { items } = useSelector((state) => state?.favorites);
  const isFavorite = items.some((favoritesItem: TFruit) => favoritesItem.id === item.id);

  const handleOnPress = (item: TFruit) => {
    navigation.navigate('FruitDetails', {
      item,
    });
  };

  return (
    <Pressable
      onPress={() => handleOnPress(item)}
      className="mr-2 w-full flex-row items-center justify-between rounded-md border-[1px] border-gray-300 bg-white p-4 active:bg-gray-200">
      <Text className="font-bold">{item?.name?.toUpperCase()}</Text>
      {isFavorite ? <StarAnimated /> : <FontAwesome name="star" size={24} color="grey" />}
    </Pressable>
  );
};
