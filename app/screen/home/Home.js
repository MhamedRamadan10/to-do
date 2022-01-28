import { useEffect, useState, useContext } from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"


export default function Home({ navigation }) {

  return (
    <View>
      <Text style={{fontSize:20, textAlign:'center', paddingVertical:10}}>Home</Text>
    </View>
  )
}
