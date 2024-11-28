import { View, Text, Button } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { useMMKVStorage } from "@/hooks/useMMKVStorage";

const SongsMain = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [count, setValue, removeValue, getAllKeys] = useMMKVStorage<number>(
    "count",
    0
  );
  const keys = getAllKeys();

  return (
    <View className="p-4 min-h-96 bg-red-200 dark:bg-slate-800">
      <Text className="bg-foreground text-background p-4">{colorScheme}</Text>

      <View className="flex items-center flex-col justify-center gap-4">
        <Text className="text-lg my-4">Count: {count}</Text>
        <View className="flex flex-row gap-4">
          <Button
            title="Increment"
            color="firebrick"
            onPress={() => setValue((prev) => prev + 1)}
          />
          <Button
            title="Decrement"
            color="firebrick"
            onPress={() => setValue((prev) => prev - 1)}
          />
        </View>
        <View className="flex flex-row gap-4">
          keys are :{keys && keys.map((key) => <Text key={key}>{key}</Text>)}
        </View>
        <Button title="Reset" onPress={removeValue} color="crimson" />
      </View>
    </View>
  );
};

export default SongsMain;
