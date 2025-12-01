import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const SavedMoviesContext = createContext<SavedMovieProps | undefined>(
  undefined
);

export const useSavedMovies = () => {
  const context = useContext(SavedMoviesContext);
  if (context === undefined) {
    throw new Error("useSavedMovies must be used within a SavedMoviesProvider");
  }
  return context;
};

export const SavedMoviesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [savedMovies, setSavedMovies] = useState<Movie[]>([]);
  const STORAGE_KEY = "@SavedMovies";

  useEffect(() => {
    const loadSavedMovies = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (jsonValue != null) {
          setSavedMovies(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error("Failed to load saved movies.", e);
      }
    };
    loadSavedMovies();
  }, []);

  useEffect(() => {
    const saveMovies = async () => {
      try {
        const jsonValue = JSON.stringify(savedMovies);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      } catch (e) {
        console.error("Failed to save movies.", e);
      }
    };
    saveMovies();
  }, [savedMovies]);

  const toggleSave = (movie: Movie) => {
    setSavedMovies((prevMovies) => {
      const movieIdNumber = Number(movie.id);
      const isCurrentlySaved = prevMovies.some((m) => m.id === movieIdNumber);
      if (isCurrentlySaved) {
        return prevMovies.filter((m) => m.id !== movieIdNumber);
      } else {
        return [movie, ...prevMovies];
      }
    });
  };

  const isMovieSaved = (id: string) => {
    return savedMovies.some((m) => m.id === Number(id));
  };

  return (
    <SavedMoviesContext.Provider
      value={{ savedMovies, toggleSave, isMovieSaved }}
    >
      {children}
    </SavedMoviesContext.Provider>
  );
};
