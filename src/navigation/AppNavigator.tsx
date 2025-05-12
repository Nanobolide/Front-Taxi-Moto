import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../app/login";
import RegisterScreen from "../../app/register";
import DashboardScreen from "../../app/home"; // <- décommente cette ligne

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} /> {/* <- décommente cette ligne */}
    </Stack.Navigator>
  );
}
