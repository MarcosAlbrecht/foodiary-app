import { ChevronLeft, ChevronRight } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/colors";

export function DateSwitcher() {
  return (
    <View className="px-2 mt-3 flex-row items-center justify-between">
      <TouchableOpacity className="size-12 items-center justify-center">
        <ChevronLeft size={20} color={colors.black[700]} />
      </TouchableOpacity>

      <Text className="font-sans-medium text-base text-gray-700 tracking-[1.25px]">
        HOJE, 16 DE SETEMBRO
      </Text>

      <TouchableOpacity className="size-12 items-center justify-center">
        <ChevronRight size={20} color={colors.black[700]} />
      </TouchableOpacity>
    </View>
  );
}
