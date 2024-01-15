import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabnavigation from './src/navigation/BottomTabNavigation';
import { FilterProvider } from './src/context/filterConetxt';
import { ListProvider } from './src/context/ListContext';
export type RootStackParams = {
  Main: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function App(): React.JSX.Element {
  return (
    <FilterProvider>
      <ListProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={BottomTabnavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </ListProvider>
    </FilterProvider>
  );
}

export default App;
