import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React from 'react';
import { Text, View } from 'react-native';
import Todos from './todos/todo'
export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <Todos/>
    </View>
  );
}
