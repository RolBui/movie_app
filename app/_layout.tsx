import { Stack } from "expo-router";
import { StatusBar } from "react-native";

import { SavedMoviesProvider } from "@/components/SavedMoviesContext";
import "./global.css";

export default function RootLayout() {
  return (
    <SavedMoviesProvider>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
      </Stack>
    </SavedMoviesProvider>
  );
}
