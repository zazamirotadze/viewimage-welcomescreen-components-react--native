import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import ViewImageScreen from "./ViewImageScreen ";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ title: 'Welcome Screen' }}  />
            <Stack.Screen name="ViewImageScreen" component={ViewImageScreen} options={{ title: 'View Image Screen' }} />
        </Stack.Navigator>
    </NavigationContainer>
);



export default App;