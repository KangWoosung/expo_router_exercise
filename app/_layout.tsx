import { View, Text, Pressable } from "react-native";
import React, { useCallback } from "react";
import { Link, router, Slot, SplashScreen, Stack } from "expo-router";
import "../global.css";
import Footer from "./_component/Footer";
import NavBar from "./_component/NavBar";
import RootLayout from "./_component/RootLayout";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigation />

        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const RootNavigation = () => {
  // Color Theme 에 따라 상수를 변경
  const colorScheme = useColorScheme();
  let colorSet;
  colorScheme === "dark" ? (colorSet = Colors.dark) : (colorSet = Colors.light);
  const backgroundColor = colorSet.background;
  const textColor = colorSet.text;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="player"
        options={{
          presentation: "card",
          gestureEnabled: true,
          gestureDirection: "vertical",
          animationDuration: 400,
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="(modals)/addToPlaylist"
        options={{
          presentation: "modal",
          headerStyle: {
            backgroundColor,
          },
          headerTitle: "Add to playlist",
          headerTitleStyle: {
            color: textColor,
          },
        }}
      />
    </Stack>
  );
};

export default App;
