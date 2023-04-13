import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";

const RestaurantScreen = ({ navigation, route }) => {
  const { imageSrc, rating, name, location, timeToReach, email, phoneNo } =
    route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="bg-black flex-1 opacity-95">
      <View className="m-12">
        <View className="w-full h-[200px] flex-row space-x-8  items-center">
          <Image source={imageSrc} className="h-[125px] w-[125px]" />
          <View>
            <Text className="text-white font-bold text-2xl">{name}</Text>
            <Text className="text-white font-bold text-2xl">{location}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
