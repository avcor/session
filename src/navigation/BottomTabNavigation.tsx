import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SessionScreen from '../screens/SessionTab/SessionScreen';
import BookedSessionScreen from '../screens/BookedSessionTab/BookedSessionTab';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { myBackground } from '../utils/colorHexCodes';

const Tab = createBottomTabNavigator();

const BottomTabnavigation = () => {
  return (
    <View style={styles.parent}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Session" component={SessionScreen} />
        <Tab.Screen name="Booked" component={BookedSessionScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: { flex: 1, backgroundColor: myBackground },
});
export default BottomTabnavigation;
