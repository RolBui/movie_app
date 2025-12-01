import { images } from "@/constants/images";
import React from "react";
// ✅ SỬA LỖI 1: Thêm import useSavedMovies
import MovieCard from "@/components/MoviesCard";
import { useSavedMovies } from "@/components/SavedMoviesContext";
import { FlatList, Image, Text, View } from "react-native";

const Saved = () => {
  const { savedMovies } = useSavedMovies();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      />

      <View className="flex-1 px-5 z-10 pt-10">
        <Text className="text-white font-bold text-xl mb-4">
          Saved Movies ({savedMovies.length})
        </Text>

        {savedMovies.length === 0 ? (
          <Text className="text-light-200 text-base text-center mt-10">
            You haven&apos;t saved any movies. Search and save movies!
          </Text>
        ) : (
          <FlatList
            data={savedMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovieCard {...item} />}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "space-between",
              gap: 20,
              paddingRight: 5,
              marginBottom: 10,
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Saved;
