import { createStackNavigator } from '@react-navigation/stack';
import FruitDetailsScreen from 'features/home/screens/fruit-details.screen';
import HomeScreen from 'features/home/screens/home.screen';

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="FruitDetails"
        component={FruitDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
