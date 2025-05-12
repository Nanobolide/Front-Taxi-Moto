// app/home.tsx

import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    router.replace("/login");
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-xl font-bold mb-4">Bienvenue sur l'accueil</Text>
      <Button title="Se déconnecter" onPress={handleLogout} />
    </View>
  );
}
