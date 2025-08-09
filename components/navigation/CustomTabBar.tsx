import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View>
      <Text>CustomTabBar</Text>
    </View>
  );
};

export default CustomTabBar;
