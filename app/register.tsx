import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { useRouter } from "expo-router";
import Input from "@/components/Input";

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"passager" | "conducteur" | "">("");

  const handleRegister = () => {
    if (!role) {
      alert("Veuillez choisir un rôle.");
      return;
    }
    // Enregistrement backend plus tard
    router.push("/home"); // Redirection après inscription
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-4">Créer un compte</Text>

      <Input
        label="Nom"
        value={name}
        onChangeText={setName}
        placeholder="Entrez votre nom"
      />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Entrez votre email"
      />
      <Input
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        placeholder="Entrez votre mot de passe"
        secureTextEntry
      />

      <Text className="mb-2 text-sm text-gray-600">Choisissez votre rôle :</Text>
      <View className="flex-row justify-between mb-6">
        <TouchableOpacity
          className={`flex-1 mr-2 p-3 rounded ${role === "passager" ? "bg-blue-500" : "bg-gray-300"}`}
          onPress={() => setRole("passager")}
        >
          <Text className={`text-center ${role === "passager" ? "text-white" : "text-black"}`}>
            Passager
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 ml-2 p-3 rounded ${role === "conducteur" ? "bg-blue-500" : "bg-gray-300"}`}
          onPress={() => setRole("conducteur")}
        >
          <Text className={`text-center ${role === "conducteur" ? "text-white" : "text-black"}`}>
            Conducteur
          </Text>
        </TouchableOpacity>
      </View>

      <Button title="S'inscrire" onPress={handleRegister} />

      <TouchableOpacity onPress={() => router.push("/login")} className="mt-4">
        <Text className="text-blue-500 text-center">Déjà inscrit ? Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}
