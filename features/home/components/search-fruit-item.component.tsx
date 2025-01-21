import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

interface SearchFruitItemProps {
  item: any;
}

export const SearchFruitItem = (props: SearchFruitItemProps) => {
  const { item } = props;
  const navigation = useNavigation();

  const handleOnPress = (item: any) => {
    navigation.navigate('FruitDetails', {
      item,
    });
  };

  return (
    <Pressable
      onPress={() => handleOnPress(item)}
      className="mr-2 rounded-md border-[1px] border-white bg-gray-300 p-2 active:bg-white">
      <Text className="font-bold ">{item?.name?.toUpperCase()}</Text>
    </Pressable>
  );
};
