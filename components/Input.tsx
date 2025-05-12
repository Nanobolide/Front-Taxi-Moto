import React from "react";
import { TextInput, Text, View } from "react-native";

type Props = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}: Props) {
  return (
    <View className="mb-4">
      {label && <Text className="mb-1 text-sm text-gray-600">{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        className="border border-gray-300 p-3 rounded"
      />
    </View>
  );
}
