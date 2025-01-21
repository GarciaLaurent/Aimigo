import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

interface FruitDetailsProps {
  item: any;
}

export const FruitDetails = (props: FruitDetailsProps) => {
  const { item } = props;

  return <Text className="font-bold ">{item?.name?.toUpperCase()}</Text>;
};
