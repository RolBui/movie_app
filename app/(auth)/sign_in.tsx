import InputText from "@/components/InputText";
import LoginButton from "@/components/LoginButton";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const sign_in = () => {
  return (
    <>
      <View className="flex-1 justify-center items-center p-4 ">
        <Text className="text-2xl font-bold tracking-wider mb-12">
          Create an Ancount
        </Text>
        <InputText placeholder="Email Address" />
        <InputText
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <InputText
          placeholder="Confirm Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity className="py-3.5 px-4 bg-blue-600 self-stretch items-center rounded-md mb-5">
          <Text className="text-white font-bold ">Create an Account</Text>
        </TouchableOpacity>
        <View className="flex-row mt-4">
          <Text className="text-gray-500 font-bold ">
            Already have an account?{" "}
          </Text>
          <Link href={"/(auth)/sign_up"} asChild>
            <TouchableOpacity className="mb-7">
              <Text className="text-blue-500 font-bold ">Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className="bg-gray-400 border-t w-1/3 mb-7" />
        <LoginButton emailHref={"/sign_up"} />
      </View>
    </>
  );
};

export default sign_in;
