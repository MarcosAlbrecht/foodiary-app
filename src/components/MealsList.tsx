import React from "react";
import { Text, View } from "react-native";
import { MealsCard } from "./MealsCard";

export function MealsList() {
  return (
    <View className="p-5">
      <Text className="text-black-700 text-base font-sans-medium tracking-[1.25px]">
        REFEIÇÕES
      </Text>
      <View className="gap-6 mt-4">
        <MealsCard />
        <MealsCard />
        <MealsCard />
        <MealsCard />
        <MealsCard />
      </View>
    </View>
  );
}
