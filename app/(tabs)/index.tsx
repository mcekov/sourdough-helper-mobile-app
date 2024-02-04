import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DEFAULTSTYLES } from "@/constants";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: -50 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      <Text>List</Text>
      {/* <ListingsBottomSheet listings={items} category={category} /> */}
    </View>
  );
};

export default Page;
