import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { BlurView } from "expo-blur";
import { Slot, Tabs } from "expo-router";
import { iconSize } from "../_constants/tokens";
import { Platform, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <>
      <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
        <Tabs.Screen
          name="(songs)/index"
          options={{
            title: "Home",
            headerTitle: "Home Screen",
            headerShown: true,
            headerStyle: {
              backgroundColor: "gainsboro",
            },
            headerBackground: () => (
              <BlurView intensity={100} style={{ flex: 1 }} />
            ),
            tabBarIcon: ({ color }) => (
              <Ionicons size={iconSize.sm} name="home" color={color} />
            ),
            // IOS only
            ...(Platform.OS === "ios"
              ? {
                  tabBarStyle: { position: "absolute", elevation: 0 },
                  tabBarBackground: () => (
                    <BlurView
                      tint="prominent"
                      intensity={100}
                      style={StyleSheet.absoluteFill}
                    />
                  ),
                }
              : undefined),
          }}
        />
        <Tabs.Screen
          name="artists/index"
          options={{
            title: "Artists",
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="musical-notes" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="playlists/index"
          options={{
            title: "PlayLists",
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="document-text" color={color} />
            ),
          }}
        />
      </Tabs>
      {/* <Slot /> */}
    </>
  );
}
