import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  console.log({ poster_path });

  return (
    <Link
      className="mr-20 mb-10"
      href={`/movies/${id}`}
      asChild
    >
      <TouchableOpacity className="w-[30%] ">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placeholder.co/600*400/1a1a1a/ffffff.png",
          }}
          className="w-40 h-72 rounded-lg"
          resizeMode="cover"
        />
        <Text
          className="text-lg font-bold text-white mt-2"
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center justify-start gap-x-1">
            <Image source={icons.star}></Image>
            <Text className="text-lg text-white font-bold uppercase">
              {Math.round(vote_average / 2)}
            </Text>
          </View>
          <View>
            <Text className="text-s text-light-300 font-medium mt-1">
              {release_date?.split("-")[0]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
