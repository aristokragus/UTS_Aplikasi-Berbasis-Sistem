import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
} from '@expo-google-fonts/plus-jakarta-sans';

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="event/[id]" options={{ animation: 'slide_from_right' }} />
      </Stack>
    </>
  );
}

export default RootLayout;
