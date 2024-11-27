import {
  Appearance,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { avatarObj } from "./_constants/assets";
import { appName, iconSize } from "./_constants/tokens";
import { useColorScheme } from "nativewind";
import { getColors } from "./_constants/color";
const defaultAvatar = require("../assets/images/default-avatar.png");

const Layout = () => {
  const [avatar, setAvatar] = useState({ uri: "" });
  const [noticeCnt, setNoticeCnt] = useState(0);

  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();

  // Async Data Fetching 을 나중에 추가...
  useEffect(() => {
    setAvatar({ uri: avatarObj.uri });
    setNoticeCnt(1);
  }, []);

  return (
    // <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
    // </NavigationContainer>
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigation
          avatar={avatar}
          noticeCnt={noticeCnt}
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        />

        <StatusBar animated style={colorScheme === "dark" ? "light" : "dark"} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

// JS 개발자는 타입선언과 펑션 파라메터의 타입지정을 스킵하시면 됩니다.
type RootNavigationProps = {
  avatar: { uri: string };
  noticeCnt: number;
  colorScheme: string | undefined;
  toggleColorScheme: () => void;
};
const RootNavigation = ({
  avatar,
  noticeCnt,
  colorScheme,
  toggleColorScheme,
}: RootNavigationProps) => {
  const currentColors = getColors(colorScheme as "light" | "dark" | undefined);

  const handleToggle = () => {
    console.log("toggleColorScheme");
    toggleColorScheme();
  };

  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: currentColors.background,
            },
            headerTintColor: currentColors.foreground,
            headerLeft: () => (
              <Image
                source={avatar.uri ? { uri: avatar.uri } : defaultAvatar}
                className="rounded-full mx-4"
                style={{
                  width: iconSize.base,
                  height: iconSize.base,
                  resizeMode: "cover",
                }}
              />
            ),
            headerRight: () => (
              <>
                <View className="relative flex flex-row gap-0">
                  <Ionicons
                    name="notifications-outline"
                    size={iconSize.base}
                    color={currentColors.foreground}
                    className="mx-2"
                  />
                  <Text className="absolute -x-1 w-6 h-5 px-1.5 rounded-full bg-red-400 text-gray-100">
                    {noticeCnt}
                  </Text>
                </View>
                <TouchableOpacity onPress={handleToggle}>
                  {colorScheme === "dark" ? (
                    <Ionicons
                      name="moon-outline"
                      size={iconSize.base}
                      color={currentColors.foreground}
                      className="mx-2"
                    />
                  ) : (
                    <Ionicons
                      name="sunny-outline"
                      size={iconSize.base}
                      color={currentColors.foreground}
                      className="mx-2"
                    />
                  )}
                </TouchableOpacity>
              </>
            ),
            headerTitle: () => (
              <View className="flex flex-row justify-center items-center">
                <Ionicons
                  name="logo-stackoverflow"
                  size={iconSize.base}
                  color={currentColors.foreground}
                  className="mx-2"
                />
                <Text
                  className="font-bold"
                  style={{
                    color: currentColors.foreground,
                  }}
                >
                  {appName}
                </Text>
              </View>
            ),
            headerTitleAlign: "center",
            animation: "slide_from_right",
            animationDuration: 500,
            gestureEnabled: true,
            gestureDirection: "horizontal",
          }}
        />
      </Stack>
    </>
  );
};

export default Layout;
