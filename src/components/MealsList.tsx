import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DailyStats } from "./DailyStats";
import { DateSwitcher } from "./DateSwitcher";
import { MealsCard } from "./MealsCard";

const meals = [
  { id: String(Math.random()), name: "Café da manha" },
  { id: String(Math.random()), name: "Almoçoo" },
  { id: String(Math.random()), name: "Janta" },
  { id: String(Math.random()), name: "Janta" },
];

function MealsListHeader() {
  return (
    <View>
      <DateSwitcher />
      <View className="mt-2">
        <DailyStats
          calories={{ current: 500, goal: 2500 }}
          carbohydrates={{ current: 250, goal: 300 }}
          fats={{ current: 100, goal: 50 }}
          proteins={{ current: 300, goal: 350 }}
        />
      </View>
      <View className="h-px bg-gray-200 mt-7"></View>
      <Text className="text-black-700 m-5 text-base font-sans-medium tracking-[1.25px]">
        REFEIÇÕES
      </Text>
    </View>
  );
}

function Separator() {
  return <View className="h-8"></View>;
}

export function MealsList() {
  const { bottom } = useSafeAreaInsets();
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: bottom + 80 }}
      data={meals}
      keyExtractor={(meal) => meal.id}
      ListHeaderComponent={MealsListHeader}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: meal }) => (
        <View className="mx-5">
          <MealsCard id={meal.id} name={meal.name} />
        </View>
      )}
    />
  );
}
