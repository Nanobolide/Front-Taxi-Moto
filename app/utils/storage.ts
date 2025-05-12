import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "app_data";

// Sauvegarde des données dans AsyncStorage
const saveData = async (data: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Erreur lors de l'enregistrement des données :", error);
  }
};

// Récupération des données depuis AsyncStorage
const getData = async (): Promise<any | null> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
};

// Suppression des données d'AsyncStorage
const removeData = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Erreur lors de la suppression des données :", error);
  }
};

// Exportation par défaut
export default {
  saveData,
  getData,
  removeData,
};
