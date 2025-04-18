import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./pages/Home";
import DetalhesScreen from "./pages/Detalhes";
import PessoalScreen from "./pages/Pessoal";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detalhes" component={DetalhesScreen} />
                <Stack.Screen name="Pessoal" component={PessoalScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}