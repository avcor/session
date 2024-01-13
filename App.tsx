import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabnavigation from './src/navigation/BottomTabNavigation';

export type RootStackParams = {
  Main: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabnavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
