import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync(); // Pour ne pas cacher l'écran splash immédiatement.

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadResources = async () => {
      // Vérifie si un token d'utilisateur existe dans AsyncStorage
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
      setIsLoading(false);
      SplashScreen.hideAsync(); // Une fois le chargement terminé, cache l'écran splash.
    };

    loadResources();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Redirige vers l'écran login si l'utilisateur n'est pas connecté
      if (userToken) {
        router.push('/home');  // Si l'utilisateur est connecté, va à '/home'
      } else {
        router.push('/login');  // Si l'utilisateur n'est pas connecté, va à '/login'
      }
    }
  }, [isLoading, userToken, router]);

  // Afficher une animation pendant le chargement
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Chargement...</Text>
      </View>
    );
  }

  return null; // L'écran principal est géré par Expo Router
}
