import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/common/MainScreen';
import DetailIssueScreen from '../screens/common/DetailIssueScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        title: 'Angular-cli/issues',
      }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="DetailIssue" component={DetailIssueScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
