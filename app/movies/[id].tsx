import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  View,
} from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );
  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          <Image
            className="w-full h-[550px]"
            resizeMode="stretch"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
          ></Image>
        </View>
        <View className="flex-col items-start"></View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
