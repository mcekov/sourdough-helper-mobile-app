import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "@/constants";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.secondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "fontBold",
          marginBottom: 2,
        },
        tabBarIconStyle: { marginTop: 2 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Sourdough Calculator",
          tabBarLabel: "Calculator",
          headerShown: true,
          headerTransparent: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "fontBold",
            fontSize: 22,
            color: COLORS.black,
          },
          headerBackground: () => {
            return null;
          },
          headerLeft: () => {
            return null;
          },
          headerRight: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="calculator" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarLabel: "Inbox",
          headerShown: false,
          /*  headerTransparent: true, */
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="speech" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          tabBarLabel: "Recipes",
          headerShown: false,
          /*  headerTransparent: true, */
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="notebook" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wish List",
          tabBarLabel: "Wish List",
          headerShown: false,
          /*  headerTransparent: true, */
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="doc" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          headerShown: false,
          /*  headerTransparent: true, */
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
