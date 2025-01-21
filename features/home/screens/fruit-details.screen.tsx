import { MaterialIcons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { BackButton } from 'components/BackButton';
import { sortBy } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, ActivityIndicator, TextInput, SafeAreaView } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { FruitDetails } from '../components/fruit-details.component';
import { SearchFruitItem } from '../components/search-fruit-item.component';
import { fetchData } from '../data/dataSlice';

export default function FruitDetailsScreen({ route, navigation }) {
  const { item } = route.params;

  console.log('item', item);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center w-full">
        <BackButton onPress={navigation.goBack} />
        <Text className="text-2xl font-bold text-center text-black">Détails du fruit</Text>
      </View>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
}
