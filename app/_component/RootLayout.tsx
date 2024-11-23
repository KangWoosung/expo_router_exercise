import { View, Text } from "react-native";
import React, { Children } from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <View className="wrapper grid min-h-[100dvh] grid-rows-[auto-1fr-auto] bg-background">
      {children}
    </View>
  );
};

export default RootLayout;
