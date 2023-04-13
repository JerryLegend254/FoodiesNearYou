import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Splash4 } from "../assets/index";
import { Octicons } from "@expo/vector-icons";

const SplashScreen4 = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <>
      <Image source={Splash4} className="w-full h-full absolute" />

      <SafeAreaView className="flex-1 items-center">
        <View className="mt-6 flex-row items-center w-full justify-between px-6">
          <TouchableOpacity
            className="flex-row space-x-2"
            onPress={() => navigation.navigate("SplashScreen3")}
          >
            <Octicons name="chevron-left" size={24} color="white" />
            <Text className="text-white font-bold text-xl">Previous</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-20 items-center">
          <Text className="text-4xl font-bold text-white">
            FOODIES NEAR YOU
          </Text>
        </View>
        <TouchableOpacity className="absolute bottom-20 items-center justify-center bg-[#311E07] w-1/2 p-2 opacity-80 rounded-lg" onPress={() => navigation.navigate("HomeScreen")}>
          <View>
            <Text className="text-white font-bold text-3xl">GET STARTED</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen4;
