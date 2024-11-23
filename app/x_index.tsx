import { View, Text } from "react-native";
import React from "react";

const index = () => {
  return (
    <View className="bg-slate-200 py-4 px-8 ">
      <Text className="font-bold">
        Hello World
        <Text className="text-red-500 font-bold"> React Native</Text>
      </Text>
    </View>
  );
};

export default index;
