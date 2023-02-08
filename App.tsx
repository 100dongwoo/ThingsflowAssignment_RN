/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootStack from './src/navigations/RootStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const AppProvider = ({
    contexts,
    children,
  }: {
    contexts: (({children}: {children: JSX.Element}) => JSX.Element)[];
    children: JSX.Element;
  }) =>
    contexts.reduce(
      (
        prev: JSX.Element,
        context: ({children}: {children: JSX.Element}) => JSX.Element,
      ) =>
        React.createElement(context, {
          children: prev,
        }),
      children,
    );

  return (
    <NavigationContainer>
      <AppProvider contexts={[]}>
        <SafeAreaView style={[styles.container, backgroundStyle]}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootStack />
        </SafeAreaView>
      </AppProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
