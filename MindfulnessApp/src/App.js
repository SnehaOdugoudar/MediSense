import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MeditationScreen from './src/components/MeditationScreen';
import RecordAudio from './src/components/RecordAudio';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MeditationScreen">
        <Stack.Screen name="MeditationScreen" component={MeditationScreen} />
        <Stack.Screen name="RecordAudio" component={RecordAudio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
