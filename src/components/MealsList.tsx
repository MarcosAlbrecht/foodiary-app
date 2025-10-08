import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../hooks/useAuth";
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
  const { user } = useAuth();
  return (
    <View>
      <DateSwitcher />
      <View className="mt-2">
        <DailyStats
          calories={{ current: 0, goal: user!.calories }}
          carbohydrates={{ current: 0, goal: user!.carbohydrates }}
          fats={{ current: 0, goal: user!.fats }}
          proteins={{ current: 0, goal: user!.proteins }}
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
