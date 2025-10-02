import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react-native";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "react-native";
import { AuthLayout } from "../../components/AuthLayout";
import { Button } from "../../components/Buttom";
import GenderStep from "../../components/SignUpSteps/GenderStep";
import GoalStep from "../../components/SignUpSteps/GoalStep";
import { signUpSchema } from "../../components/SignUpSteps/signUpSchema";
import { colors } from "../../styles/colors";

export default function SignUp() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const form = useForm({ resolver: zodResolver(signUpSchema) });

  const steps = [
    {
      icon: "🎯",
      title: "Qual o seu objetivo?",
      subtitle: "O que vocë pretende alcançar com a dieta?",
      Component: GoalStep,
    },
    {
      icon: "🎯",
      title: "Qual é o seu gênero?",
      subtitle: "Seu gênero influencia no tipo da dieta",
      Component: GenderStep,
    },
  ];

  function handlePreviouStep() {
    if (currentStepIndex === 0) {
      router.back();
      return;
    }
    setCurrentStepIndex((prevState) => prevState - 1);
  }

  function handleNextStep() {
    if (currentStepIndex === steps.length - 1) {
      return;
    }
    setCurrentStepIndex((prevState) => prevState + 1);
  }

  const currentStep = steps[currentStepIndex];
  return (
    <AuthLayout
      icon={currentStep.icon}
      title={currentStep.title}
      subtitle={currentStep.subtitle}
    >
      <View className="flex-1 justify-between">
        <FormProvider {...form}>
          <currentStep.Component />
        </FormProvider>
      </View>
      <View className="flex-row gap-6 justify-between">
        <Button size="icon" color="gray" onPress={handlePreviouStep}>
          <ArrowLeftIcon size={20} color={colors.black[700]} />
        </Button>
        <Button size="icon" onPress={handleNextStep}>
          <ArrowRightIcon size={20} color={colors.black[700]} />
        </Button>
      </View>
    </AuthLayout>
  );
}
