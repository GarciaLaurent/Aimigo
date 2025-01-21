import { createStackNavigator } from '@react-navigation/stack';
import FruitDetailsScreen from 'features/home/screens/fruit-details.screen';

import TabNavigator from './TabNavigator';
import Modal from '../screens/modal';

export type RootStackParamList = {
  TabNavigator: undefined;
  Modal: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ presentation: 'modal', headerLeft: () => null }}
        /> */}
    </Stack.Navigator>
  );
}
