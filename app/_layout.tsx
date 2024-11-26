import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { avatarObj } from "./_constants/assets";
import { appName, iconSize } from "./_constants/tokens";
const defaultAvatar = require("../assets/images/default-avatar.png");

const Layout = () => {
  const [avatar, setAvatar] = useState({ uri: "" });
  const [noticeCnt, setNoticeCnt] = useState(0);

  // Async Data Fetching 을 나중에 추가...
  useEffect(() => {
    setAvatar({ uri: avatarObj.uri });
    setNoticeCnt(1);
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigation avatar={avatar} noticeCnt={noticeCnt} />

        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

// JS 개발자는 타입선언과 펑션 파라메터의 타입지정을 스킵하시면 됩니다.
type RootNavigationProps = {
  avatar: { uri: string };
  noticeCnt: number;
};
const RootNavigation = ({ avatar, noticeCnt }: RootNavigationProps) => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerLeft: () => (
              <Image
                source={
                  avatar.uri ? { uri: avatar.uri } : defaultAvatar // 기본 이미지
                }
                className="rounded-full mx-4 "
                style={{
                  width: iconSize.base,
                  height: iconSize.base,
                  resizeMode: "cover",
                }}
              />
            ),
            headerRight: () => (
              <View className="relative flex flex-row gap-0">
                <Ionicons
                  name="notifications-outline"
                  size={iconSize.base}
                  color="black"
                  className="mx-2"
                />
                <Text className="absolute -x-1 w-5 h-5 px-1.5 rounded-full bg-red-400 text-gray-100">
                  {noticeCnt}
                </Text>
                <Ionicons
                  name="settings-outline"
                  size={iconSize.base}
                  color="black"
                  className="mx-2"
                />
              </View>
            ),
            headerTitle: () => (
              <View className="flex flex-row justify-center items-center">
                <Ionicons
                  name="logo-stackoverflow"
                  size={iconSize.base}
                  color="black"
                  className="mx-2"
                />
                <Text className=" font-bold">{appName}</Text>
              </View>
            ),
            headerTitleAlign: "center", // 타이틀 중앙 정렬
          }}
        />
      </Stack>
      {/* <Slot /> */}
    </>
  );
};

export default Layout;
