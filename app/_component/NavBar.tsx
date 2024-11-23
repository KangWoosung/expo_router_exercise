/*
2024-11-19 18:53:22
RN 에서 clsx 는 사용할 수 없는 것 같다. 

*/
import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { cn } from "@/lib/utils";

type PropsType = {
  className: string;
};
const NavBar = ({ className }: PropsType) => {
  return (
    <View
      className={
        className +
        `flex flex-row justify-between items-center bg-slate-400 text-neutral-800 py-2 px-4`
      }
    >
      <View>
        <Pressable onPress={() => router.push("/")}>
          <Text className="font-bold text-l text-red-600">
            My First RN Work
          </Text>
        </Pressable>
      </View>
      <View className="flex flex-row gap-6 px-8">
        <Link href="./about">About</Link>
        <Link href="./contact">Contact Us</Link>
      </View>
    </View>
  );
};

export default NavBar;
