import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const LoginButton = (props: LoginButtonProps) => {
  const { emailHref } = props;
  return (
    <>
      <View className="self-stretch mt-2">
        <Link href={emailHref} asChild>
          <TouchableOpacity className="flex-row  items-center justify-center py-4 px-6 bg-slate-400 rounded-full gap-2 mb-4">
            <Image source={icons.mail} className="w-5 h-5 pb-2.5 " />
            <Text className="text-white font-bold ">Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View className="self-stretch mt-2">
        <Link href={"/(auth)/sign_in"} asChild>
          <TouchableOpacity className="flex-row  items-center justify-center py-4 px-6 bg-slate-400 rounded-full gap-2 mb-4">
            <Image source={icons.gg} className="w-5 h-5 pb-2.5 " />
            <Text className="text-white font-bold  ">Continue with Google</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View className="self-stretch mt-2">
        <Link href={"/(auth)/sign_in"} asChild>
          <TouchableOpacity className="flex-row  items-center justify-center py-4 px-6 bg-slate-400 rounded-full gap-2 mb-4">
            <Image source={icons.apple} className="w-5 h-5 pb-2.5" />
            <Text className="text-white font-bold  ">Continue with Apple</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
};

export default LoginButton;
