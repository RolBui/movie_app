import InputText from "@/components/InputText";
import LoginButton from "@/components/LoginButton";
import { Link, router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Sign_up = () => {
  return (
    <>
      <View className="flex-1 justify-center items-center p-4 ">
        <Text className="text-2xl font-bold tracking-wider mb-12">
          Login to Your Acount
        </Text>
        <InputText placeholder="Email Address" />
        <InputText
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <TouchableOpacity
          className="py-3.5 px-4 bg-blue-600 self-stretch items-center rounded-md mb-5"
          onPress={() => {
            router.push("/(tabs)");
          }}
        >
          <Text className="text-white font-bold ">Login </Text>
        </TouchableOpacity>

        <View className="flex-row mt-4">
          <Text className="text-gray-500 font-bold ">
            Don&apos;t have an account?
          </Text>
          <Link href={"/(auth)/sign_up"} asChild>
            <TouchableOpacity className="mb-7">
              <Text className="text-blue-500 font-bold ">Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="bg-gray-400 border-t w-1/3 mb-7" />
        <LoginButton emailHref={"/sign_up"} />
      </View>
    </>
  );
};

export default Sign_up;
