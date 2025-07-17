import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView as SafeArea,
  Text,
  View,
} from "react-native";

const TabIcon = ({
  focused,
  icon,
  title,
}: any) => {
  if (focused) {
    return (
      <SafeArea>
        <ImageBackground
          source={images.highlight}
          className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: "#151312",
            }}
          />
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </ImageBackground>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image
          source={icon}
          tintColor={"#A8B5DB"}
          className="size-5"
        ></Image>
      </View>
    </SafeArea>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{ tabBarShowLabel: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title={"Home"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
              title={"Search"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.save}
              title={"Saved"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.person}
              title={"Profile"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
