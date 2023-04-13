import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Splash3 } from "../assets/index";
import { Octicons } from "@expo/vector-icons";

const SplashScreen3 = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <>
      <Image source={Splash3} className="w-full h-full absolute" />

      <SafeAreaView className="flex-1 items-center">
        <View className="mt-6 flex-row items-center w-full justify-between px-6">
          <TouchableOpacity
            className="flex-row space-x-2"
            onPress={() => navigation.navigate("SplashScreen2")}
          >
            <Octicons name="chevron-left" size={24} color="white" />
            <Text className="text-white font-bold text-xl">Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity className="">
            <Text className="text-white font-bold text-xl">Skip</Text>
          </TouchableOpacity>
        </View>
        <View className="space-y-12 mt-20 items-center">
          <Text className="text-3xl font-bold text-white">
            CONTACT THE RESTAURANT
          </Text>
          <Text className="text-3xl font-bold text-center mx-4 text-[#2F6A4E]">
            Contact the restaurant before hand to order a table and food.
          </Text>
        </View>
        <TouchableOpacity className="absolute bottom-20 items-center justify-center bg-[#263107] w-1/2 p-2 opacity-80 rounded-lg" onPress={() => navigation.navigate("SplashScreen4")}>
          <View>
            <Text className="text-white font-bold text-3xl">NEXT</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen3;
