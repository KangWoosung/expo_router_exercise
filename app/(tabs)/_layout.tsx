/*
className={`bg-slate-200 py-4 px-8 font-bold text-red-500`}
*/

import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsNavigation = () => {
  return (
    <Tabs>
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="playlists" />
      <Tabs.Screen name="(songs)" />
      <Tabs.Screen name="artists" />
    </Tabs>
  );
};

export default TabsNavigation;
