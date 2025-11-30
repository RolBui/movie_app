import LoginButton from "@/components/LoginButton";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const index = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <View className="flex-1 justify-end items-center px-5 pb-10">
        <Text>
          <Text className="text-xl font-bold text-white mb-2">Movie App</Text>
        </Text>
        <Text className="text-sm font-bold text-white mb-5">
          One Stop Solution for All Your Needs.
        </Text>
        <LoginButton emailHref={"/sign_in"} />

        <View className="flex-row">
          <Text className="text-white font-bold ">
            Already have an account?{" "}
          </Text>
          <Link href={"/(auth)/sign_up"} asChild>
            <TouchableOpacity className="">
              <Text className="text-blue-500 font-bold">Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default index;
