import { View, Text } from "react-native";
import React from "react";

type PropsType = {
  className: string;
};
const Footer = ({ className }: PropsType) => {
  return (
    <View className={className}>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;
