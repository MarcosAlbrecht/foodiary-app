import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/Buttom";
import { Logo } from "../../components/Logo";

export default function SignIn() {
  return (
    <ImageBackground
      source={require("../assets/onboarding-bg/onboarding-bg.png")}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-between">
          <View className="mx-auto mt-4">
            <Logo width={100} height={32} />
          </View>
          <View className="w-full items-center">
            <Text className="font-sans-semibold text-[32px] text-white w-[311px] text-center">
              Controle sua dieta de forma simples
            </Text>

            <View className="mx-5 w-full p-5 mt-6">
              <Link asChild href="/signup">
                <Button className="w-full">Criar conta</Button>
              </Link>

              <View className="mt-[30px] flex-row items-center gap-2 justify-center">
                <Text className="text-white font-sans-regular text-base">
                  Já tem conta?
                </Text>
                <Text className="text-lime-500 font-sans-medium text-base">
                  <Link href="/signin">Acesse agora</Link>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
