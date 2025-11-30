import TrendingList from "@/components/TredingList";
import { ms } from "@/constants/screen-dimensions";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

const Profile = () => {
  const { data: trendingMovies } = useFetch(getTrendingMovies);

  return (
    <View className="flex-1 bg-primary ">
      <View className="flex-row justify-between px-5 mt-10 pb-6">
        <Text className="text-white text-xl font-bold ">Profile</Text>
        <Image />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View className="justify-center items-center">
          <Image
            source={require("@/assets/images/person.png")}
            style={{ height: ms(150), width: ms(150) }}
            className="rounded-full"
          />
          <Text className="text-light-200 font-bold text-xl text-center mt-2">
            Kelvin
          </Text>
          <Text className="text-gray-400 font-bold text-sm text-center">
            kelvin123@gmail.com
          </Text>
        </View>
        <View className="px-5 mt-5">
          <Text className="font-bold text-blue-500">Watch History</Text>
        </View>
        <View className="flex-row justify-between px-5 mt-5">
          <Text className="font-bold text-white ">Yesterday</Text>
          <Text className="font-bold text-blue-500 text-sm">
            {"See more >>"}
          </Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            className="mb-4 mt-3"
            data={trendingMovies}
            renderItem={({ item, index }) => (
              <TrendingList movie={item} index={index} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
        <View className="flex-row justify-between px-5 mt-5">
          <Text className="font-bold text-white ">3th December 2025 </Text>
          <Text className="font-bold text-blue-500 text-sm">
            {"See more >>"}
          </Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            className="mb-4 mt-3"
            data={trendingMovies}
            renderItem={({ item, index }) => (
              <TrendingList movie={item} index={index} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
