
import { Link } from "expo-router";
import React from "react";
import { Image, TouchableOpacity } from "react-native";

interface SingleCardProps {
    
}

const SingleCard = ({ movie }: SingleCardProps) => {
  if (!movie) return null;

  return (
    <Link href={`/movie/${movie.movie_id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </Link>
  );
};

export default SingleCard;
