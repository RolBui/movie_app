import { images } from "@/constants/images";
import React from "react";
import { Image, ScrollView, View } from "react-native";

const Saved = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      ></ScrollView>
    </View>
  );
};

export default Saved;
