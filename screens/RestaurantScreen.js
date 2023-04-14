import { View, Text, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar } from "react-native";
import React, { useLayoutEffect } from "react";
import { AntDesign, Ionicons, Octicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";


const RestaurantScreen = ({ navigation, route }) => {
  const { imageSrc, rating, name, location, timeToReach, email, phoneNo } =
    route.params;
  
  let mins;

  const timeToMinutes = (time) => {
    mins = Math.ceil(time * 60);
    return mins;
  }

  timeToMinutes(timeToReach)
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const ratingStars = Array.from({ length: Math.floor(rating) }).map((s, i) => (
    <AntDesign key={i} name="star" size={24} color="#BC5428" />
  ));
  return (
    <SafeAreaView className={`bg-black flex-1 opacity-95 ${StatusBar.currentHeight ? `m-${StatusBar.currentHeight}` : ""}`}>
      <TouchableOpacity
        className="flex-row space-x-2 ml-3 items-center mt-3"
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Octicons name="chevron-left" size={30} color="white" />
        <Text className="text-white font-extrabold text-2xl">Back</Text>
      </TouchableOpacity>

      <View className="mt-16 w-full mx-5">
        <View className="w-full h-[200px] flex-row space-x-8  items-center">
          <Image source={imageSrc} className="h-[140px] w-[125px]" />
          <View className="space-y-1">
            <Text className="text-white font-extrabold text-2xl">
              {name.length > 12 ? `${name.slice(0, 12)}..` : name}
            </Text>
            <Text className="text-white">{ratingStars}</Text>
            <View className="flex-row items-center space-x-1">
              <MaterialIcons name="location-pin" size={22} color="white" />
              <Text className="text-white font-bold text-2xl">{location}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-center space-x-3 my-3">
        <FontAwesome5 name="stopwatch" size={24} color="white" />
        <Text className="text-white text-2xl font-bold">
          Estimated time: {mins} mins
        </Text>
      </View>
      <View className="w-5/6 h-1/3 rounded-2xl bg-[#1C1718] self-center items-center justify-center space-y-2">
        <Text className="text-white text-5xl font-extrabold">Contact Info</Text>
        <View className="items-center space-y-2">
          <View className="flex-row space-x-2">
            <Ionicons name="md-mail" size={24} color="white" />
            <Text className="text-white text-2xl font-bold">
              Email Address :{" "}
            </Text>
          </View>
          <Text className="text-white text-xl font-bold">{email}</Text>
          <View className="flex-row space-x-2 items-center">
            <MaterialIcons name="local-phone" size={24} color="white" />
            <Text className="text-white text-2xl font-bold">
              Phone Number :{" "}
            </Text>
          </View>
          <Text className="text-white text-xl font-bold">{phoneNo}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
