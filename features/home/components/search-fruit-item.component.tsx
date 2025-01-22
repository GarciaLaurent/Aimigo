import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';

interface SearchFruitItemProps {
  item: any;
}

export const SearchFruitItem = (props: SearchFruitItemProps) => {
  const { item } = props;
  const { items } = useSelector((state) => state?.favorites);
  const isFavorite = items.some((favoritesItem) => favoritesItem.id === item.id);

  const navigation = useNavigation();

  const handleOnPress = (item: any) => {
    navigation.navigate('FruitDetails', {
      item,
    });
  };

  return (
    <Pressable
      onPress={() => handleOnPress(item)}
      className="mr-2 w-full flex-row rounded-md border-[1px] border-white bg-gray-300 py-4 active:bg-white">
      <Text className="font-bold">{item?.name?.toUpperCase()}</Text>
      <FontAwesome name="star" size={24} color={isFavorite ? '#FFD700' : 'grey'} />
    </Pressable>
  );
};
