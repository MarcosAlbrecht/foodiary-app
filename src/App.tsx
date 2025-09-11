import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./styles/global.css";

export default function App() {
  return (
    <View className="bg-zinc-800 flex-1 items-center justify-center">
      <Text className="text-white text-base">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
