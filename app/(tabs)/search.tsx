/* eslint-disable react-hooks/rules-of-hooks */
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";

const search = () => {
  const [searchQuery, setSearchQuery] =
    useState(" ");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(
    () => fetchMovies({ query: searchQuery }),
    false
  );

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-2 absolute w-full z-0"
        resizeMode="cover"
      ></Image>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard {...item} />
        )}
        keyExtractor={(item) =>
          item.id.toString()
        }
        className="px-5"
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image
                source={icons.logo}
                className="w-40 h-20"
              ></Image>
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={(text: string) =>
                  setSearchQuery
                }
              />
            </View>
            {moviesLoading && (
              <ActivityIndicator
                className="my-3"
                size={"large"}
                color={"#0000ff"}
              />
            )}
            {moviesError && (
              <Text className="text-500-red px-5 my-3">
                Error: {moviesError.message}
              </Text>
            )}
            {!moviesLoading &&
              !moviesError &&
              searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-xl text-white font-bold">
                  Search Results for {searchQuery}
                  <Text className="text-accent">
                    SEARCH TERM
                  </Text>
                </Text>
              )}
          </>
        }
      />
    </View>
  );
};

export default search;
