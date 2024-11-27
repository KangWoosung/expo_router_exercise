import { View, Text } from "react-native";
import React, { Children } from "react";
import { ThemeState, useThemeStore } from "../_contexts/themeStore";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  //useThemeStore
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isDarkMode = theme === "dark";
};

export default RootLayout;
