import { View, Text } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

const SongsMain = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="p-4 min-h-96 bg-red-200 dark:bg-slate-800">
      <Text className="bg-destructive text-foreground">SongsMain</Text>
      <Text className="bg-foreground text-background dark:text-foreground">
        {colorScheme}
      </Text>
    </View>
  );
};

export default SongsMain;
