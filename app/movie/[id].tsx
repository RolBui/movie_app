import MovieInFo from "@/components/MovieInFo";
import { icons } from "@/constants/icons";
import { fetchMoviesDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";

import { useSavedMovies } from "@/components/SavedMoviesContext";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: movie } = useFetch(() => fetchMoviesDetails(id as string));

  const { toggleSave, isMovieSaved } = useSavedMovies();
  const isSaved = isMovieSaved(id as string);

  const handleToggleSaved = () => {
    if (movie) {
      if (!movie.poster_path || !movie.release_date) {
        console.warn("movie cant be saved");
        return;
      }
      const movieToSave: Movie = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path!,
        vote_average: movie.vote_average,
        release_date: movie.release_date.substring(0, 4),
        adult: movie.adult,
        backdrop_path: movie.backdrop_path!,
        genre_ids: movie.genres.map((g) => g.id),
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview!,
        popularity: movie.popularity,
        video: movie.video,
        vote_count: movie.vote_count,
        // movie: {
        //   searchTerm: "",
        //   movie_id: movie.id,
        //   title: movie.title,
        //   count: 0,
        //   poster_url: movie.poster_path!,
        // } as TrendingMovie,
      };
      toggleSave(movieToSave);
    }
  };

  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View className="relative">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[360px]"
            resizeMode="stretch"
          />

          <View className="flex-col justify-center items-center ">
            <TouchableOpacity
              className="absolute top-6 right-7 w-7 h-7"
              onPress={handleToggleSaved}
            >
              <Image
                source={icons.checksave}
                className="w-full h-full"
                tintColor={isSaved ? "#FFD700" : "white"}
              />
            </TouchableOpacity>
          </View>

          <View className="flex-col items-start justify-center mt-5 px-5 ">
            <Text className=" text-white font-bold text-xl">
              {movie?.title}
            </Text>
            <View className="flex-row items-center gap-x-2 mt-2">
              <Text className="text-sm text-light-200">
                {movie?.release_date}
              </Text>
              <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
            </View>
            <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2 ">
              <Image source={icons.star} className="size-4" />
              <Text className="text-white font-bold text-sm">
                {Math.round(movie?.vote_average ?? 0)}/10
              </Text>
              <Text className="text-light-200 text-sm">
                ({movie?.vote_count} votes)
              </Text>
            </View>
          </View>

          <MovieInFo label="Overview" value={movie?.overview} />
          <MovieInFo
            label="Genres"
            value={movie?.genres.map((g) => g.name).join("-") || "N/A"}
          />
          <View className="flex-row justify-between w-1/2">
            <MovieInFo
              label="Budget"
              value={
                movie?.budget && movie.budget > 0
                  ? `$${Math.round(movie.budget / 1000000)} million`
                  : "N/A"
              }
            />
            <MovieInFo
              label="Revenue"
              value={
                movie?.revenue && movie.revenue > 0
                  ? `$${Math.round(movie?.revenue / 1000000)} million`
                  : "N/A"
              }
            />
          </View>
          <MovieInFo
            label="Production Companies"
            value={
              movie?.production_companies.map((c) => c.name).join("-") || "V/N"
            }
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-xl py-3.5 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
