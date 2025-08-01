import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

import TrendingCard from "@/components/trendingCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
// import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
      />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
          source={icons.logo}
          className="size-56 mt-20 mx-auto"
        ></Image>
        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color={"#0000ff"}
            className="mt-10 self-center"
          />
        ) : moviesError || trendingError ? (
          <View className="mt-10 px-4">
            <Text className="text-lg text-red-400 font-bold mb-2 text-center">
              Error:{" "}
              {moviesError?.message ||
                trendingError?.message}
            </Text>
          </View>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() =>
                router.push("/search")
              }
              placeholder="Seach for a movie.."
              value={""}
              onChangeText={function (
                text: string
              ): void {
                throw new Error(
                  "Function not implemented."
                );
              }}
            />
            {trendingMovies && (
              <View className="mt-10">
                <Text className="text-white font-bold mb-3">
                  Trending Movies
                </Text>
              </View>
            )}
            <>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={
                  false
                }
                ItemSeparatorComponent={() => (
                  <View className="w-4" />
                )}
                data={trendingMovies}
                renderItem={({ item, index }) => (
                  // <TrendingCard movie={item} index={index} />
                  <TrendingCard
                    movie={item}
                    index={index}
                  />
                )}
                keyExtractor={(item) =>
                  item.movie_id.toString()
                }
              ></FlatList>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  // <Text className="text-sm text-white">
                  //   {item.title}
                  // </Text>
                  <MovieCard {...item} />
                )}
                keyExtractor={(item) =>
                  item.id.toString()
                }
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
