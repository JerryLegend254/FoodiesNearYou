import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Fogo, ProfilePic, MamaOliech, Chinese } from "../assets/index";
import { AntDesign } from "@expo/vector-icons";
import Category from "../components/Category";
import RestaurantCard from "../components/RestaurantCard";


const HomeScreen = ({ navigation }) => {
  const [type, setType] = useState("popular");
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-black opacity-90 items-center">
      <View className="items-center space-y-3 mt-6">
        <View className="h-[40px] w-[40px]">
          <Image source={ProfilePic} className="w-full h-full object-cover" />
        </View>
        <Text className="text-white font-semibold text-lg">Hey, Jeremy</Text>
      </View>
      <View className="m-6 space-y-6 items-center">
        <Text className="text-white font-semibold text-3xl text-center">
          Find Top restaurants near you and book your table and food
        </Text>
        <View className="w-[200px] h-[60px] bg-[#d8d8d8] rounded-3xl items-center justify-center flex-row space-x-4">
          <Text className="font-bold text-xl text-[#2C908E]">Muhuri Road</Text>
          <AntDesign name="downcircle" size={24} color="#2C908E" />
        </View>
      </View>

      <View className="flex-row items-center justify-around w-full">
        <Category key="Popular" title="Popular" type={type} setType={setType} />
        <Category
          key="New"
          title="Newly Opened"
          type={type}
          setType={setType}
        />
        <Category
          key="Budget"
          title="Budget Friendly"
          type={type}
          setType={setType}
        />
      </View>

      <ScrollView className="flex-1 w-full mt-4">
        <View className="space-y-2">
          <RestaurantCard
            imageSrc={Fogo}
            name="Fogo Gaucho"
            rating="4.3"
            distance={4}
            state="liked"
            location="Westlands"
            timeToReach={2.1}
            email="fogogaucho@gmail.com"
            phoneNo="0725882932"
            navigation={navigation}
          />
          <RestaurantCard
            imageSrc={Chinese}
            name="Chinese Place"
            rating="4.4"
            distance={2.3}
            state="liked"
            location="Parklands"
            timeToReach={1.04}
            email="chineseplace@gmail.com"
            phoneNo="0705082931"
            navigation={navigation}
          />
          <RestaurantCard
            imageSrc={MamaOliech}
            name="Mama Oliech Fish Place"
            rating="3.3"
            distance={5.6}
            state="liked"
            location="Dagoretti"
            timeToReach={2.9}
            email="mamaoliechfish@gmail.com"
            phoneNo="0721283942"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
