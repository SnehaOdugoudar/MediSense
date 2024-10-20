import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MeditationScreen from './src/components/MeditationScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Meditation">
                <Stack.Screen name="Meditation" component={MeditationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
