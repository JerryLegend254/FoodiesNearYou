import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const RestaurantCard = ({ navigation, imageSrc, name, rating, distance, location, timeToReach, email, phoneNo}) => {
  const [like, setLike] = useState(false);
  const ratingStars = Array.from({ length: Math.floor(rating) }).map((s, i) => (
    <AntDesign key={i} name="star" size={24} color="#BC5428" />
  ));
  return (
    <View className="w-full">
      <TouchableOpacity onPress={() => navigation.navigate("RestaurantScreen", {imageSrc, name, rating,timeToReach, email, phoneNo, location})}>
        <View className="flex-row items-center space-x-8 my-3 w-5/6">
          <View className="w-[125px] h-[125px] ml-4 rounded-lg">
            <Image source={imageSrc} className="w-full h-full" />
          </View>
          <View className="justify-center w-1/2 space-y-1 ">
            <Text className="text-white text-2xl font-bold">
              {name.length > 14 ? `${name.slice(0, 14)}..` : name}
            </Text>
            <Text className="text-white">{ratingStars}</Text>
            <View className="flex-row items-center space-x-2">
              <MaterialIcons name="my-location" size={16} color="white" />
              <Text className="text-white font-bold text-lg">
                {distance} kms away
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="absolute  self-end w-10 mt-8 h-2/3"
        onPress={() => setLike(!like)}
      >
        <View className="">
          <AntDesign
            name="heart"
            size={30}
            color={like ? "#BC5428" : "#d8d8d8"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantCard;
