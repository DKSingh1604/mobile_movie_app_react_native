 import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className = "flex-1 justify-center items-center bg-gray-100">
      <Text className = "text-5xl text-primary font-bold">Welcome!</Text>
      <Text className="text-2xl"><Link href="/onboarding">ONBOARDING</Link></Text>
      
    </View>
  );
}
