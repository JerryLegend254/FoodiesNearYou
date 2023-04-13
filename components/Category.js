import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Category = ({title, type, setType}) => {
  return (
    <TouchableOpacity className=" space-y-1 items-center justify-center" onPress={() => setType(title.toLowerCase())}>
      <Text className="text-white font-bold text-xl">{title}</Text>
      <View className={`h-[12px] w-[12px] ${title.toLowerCase() === type ? `bg-[#BC5428]` : ""} rounded-full`}></View>
    </TouchableOpacity>
  );
}

export default Category