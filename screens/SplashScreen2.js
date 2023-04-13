import {
  Text,
  View,
    SafeAreaView,
    Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Splash2 } from "../assets/index";
import { Octicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const w = Dimensions.get("screen")

const SplashScreen2 = ({ navigation }) => {
  useLayoutEffect(() => {
      navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <>
      <Image source={Splash2} className="w-full h-full absolute" />

      <SafeAreaView className="flex-1 items-center">
        <View className="mt-6 flex-row items-center w-full justify-between px-6">
          <TouchableOpacity
            className="flex-row space-x-2"
            onPress={() => navigation.navigate("SplashScreen1")}
          >
            <Octicons name="chevron-left" size={24} color="white" />
            <Text className="text-white font-bold text-xl">Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity className="">
            <Text className="text-white font-bold text-xl">Skip</Text>
          </TouchableOpacity>
        </View>
        <View className="space-y-12 mt-20 items-center mx-6">
          <Text className="text-3xl font-bold text-white">
            TRY OUT NEW FOODS
          </Text>
          <Text className="text-3xl font-bold text-center text-[#A59EF5]">
            From a wide variety of amazing restaurants near you.
          </Text>
        </View>
        <TouchableOpacity
          className="absolute bottom-20 items-center justify-center bg-[#072731] w-1/2 p-2 opacity-80 rounded-lg"
          onPress={() => navigation.navigate("SplashScreen3")}
        >
          <Animatable.View animation="pulse" easing="ease-in-out" iterationCount="infinite">
            <Text className="text-white font-bold text-3xl">NEXT</Text>
          </Animatable.View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen2;
