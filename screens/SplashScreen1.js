import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Splash1 } from "../assets/index";

const SplashScreen1 = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <>
      <ImageBackground source={Splash1} className="w-full h-full object-cover">
        <SafeAreaView className="flex-1 items-center">
          <TouchableOpacity className="self-end mr-6 mt-6">
            <Text className="text-white font-bold text-xl">Skip</Text>
          </TouchableOpacity>
          <View className="space-y-6 mt-20 items-center mx-6">
            <Text className="text-3xl font-bold text-white">
              FIND A RESTAURANT
            </Text>
            <Text className="text-3xl font-bold text-center">
              Find amazing restaurants near you with just few clicks.
            </Text>
          </View>
          <View className="absolute bottom-20 items-center justify-center flex-row space-x-2">
            <TouchableOpacity className="h-[20px] w-[20px] border items-center justify-center border-white rounded-full">
              <View className="h-[12px] w-[12px] bg-white rounded-full"></View>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[20px] w-[20px] items-center justify-center rounded-full"
              onPress={() => navigation.navigate("SplashScreen2")}
            >
              <View className="h-[12px] w-[12px] bg-[#d8d8d8] rounded-full"></View>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[20px] w-[20px] items-center justify-center rounded-full"
              onPress={() => navigation.navigate("SplashScreen3")}
            >
              <View className="h-[12px] w-[12px] bg-[#d8d8d8] rounded-full"></View>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[20px] w-[20px] items-center justify-center rounded-full"
              onPress={() => navigation.navigate("SplashScreen4")}
            >
              <View className="h-[12px] w-[12px] bg-[#d8d8d8] rounded-full"></View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default SplashScreen1;
