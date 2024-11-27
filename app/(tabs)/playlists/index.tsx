import { View, Text } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { getColors } from "@/app/_constants/color";

const PlayLists = () => {
  const { colorScheme } = useColorScheme();
  const currentColors = getColors(colorScheme as "light" | "dark");
  return (
    <View>
      <Text>PlayLists</Text>
    </View>
  );
};

export default PlayLists;
