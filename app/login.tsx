import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logique de login ici
    router.replace("/home");
  };

  return (
    <View className="flex-1 justify-center px-6 py-12 bg-white">
      <View className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Text className="text-3xl font-bold text-blue-600 mb-8 text-center">Connexion</Text>
      </View>

      <View className="sm:mx-auto sm:w-full sm:max-w-sm">
        <View className="mb-4">
          <Text className="mb-1 text-sm text-gray-600">Email</Text>
          <View className="flex-row items-center border border-gray-300 rounded px-3 py-2">
            <Ionicons name="mail-outline" size={20} color="gray" className="mr-2" />
            <TextInput
              placeholder="Entrez votre email"
              className="flex-1 text-base"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
        </View>

        <View className="mb-6">
          <Text className="mb-1 text-sm text-gray-600">Mot de passe</Text>
          <View className="flex-row items-center border border-gray-300 rounded px-3 py-2">
            <Ionicons name="lock-closed-outline" size={20} color="gray" className="mr-2" />
            <TextInput
              placeholder="Entrez votre mot de passe"
              secureTextEntry
              className="flex-1 text-base"
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <TouchableOpacity
          className="bg-blue-600 py-3 rounded mb-4"
          onPress={handleLogin}
        >
          <Text className="text-white text-center font-semibold text-lg">Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text className="text-blue-500 text-center">Pas encore de compte ? S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
