import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "auth_token";

// Fonction pour sauvegarder le token
const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du token :", error);
  }
};

// Fonction pour récupérer le token
const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error("Erreur lors de la récupération du token :", error);
    return null;
  }
};

// Fonction pour supprimer le token
const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error("Erreur lors de la suppression du token :", error);
  }
};

// Export par défaut
export default {
  saveToken,
  getToken,
  removeToken,
};
