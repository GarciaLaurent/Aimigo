import { MaterialIcons } from '@expo/vector-icons';
import { Container } from 'components/container.component';
import { sortBy } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, ActivityIndicator, TextInput } from 'react-native';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { TFruit } from 'utils/types.type';

import { EmptySearch } from '../components/empty-search.component';
import { SearchFruitItem } from '../components/search-fruit-item.component';
import { fetchData } from '../data/dataSlice';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state?.data);
  const inputRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredData = useMemo(() => {
    const dataFiltered = items.filter(
      (item: TFruit) =>
        item?.name?.toLowerCase()?.includes(searchValue?.toLowerCase()) ||
        item?.family?.toLowerCase()?.includes(searchValue?.toLowerCase())
    );
    const sortedData = sortBy(dataFiltered, ['name']);
    return sortedData;
  }, [items, searchValue]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === 'loading') {
    return <ActivityIndicator size="large" />;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  const onChange = (value: string) => {
    setSearchValue(value);
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <Container>
      <View className="m-4">
        <Text className="text-center text-xl font-bold">Home</Text>
      </View>
      <View className="w-full flex-1 p-4">
        <View className="h-12 w-full flex-row items-center rounded-full border-[1px] border-white bg-white px-4 pl-12 pr-9 text-black">
          <View className="absolute left-0 h-full items-center justify-center px-4 ">
            <MaterialIcons name="search" size={20} color="#B7B7B7" />
          </View>
          <TextInput
            ref={inputRef}
            keyboardType="default"
            placeholder="Rechercher par nom ou catégorie"
            placeholderTextColor="#B7B7B7"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(value) => onChange(value)}
            value={searchValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View className="mt-3 w-full flex-1 p-4">
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item?.id?.toString()}
            renderItem={({ item }) => (
              <View key={item?.id?.toString()}>
                <SearchFruitItem item={item} />
              </View>
            )}
            ItemSeparatorComponent={() => <View className="h-2" />}
            ListEmptyComponent={<EmptySearch />}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
            refreshing={isRefreshing}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
          />
        </View>
      </View>
    </Container>
  );
}
