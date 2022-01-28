import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Single } from './../screen'


const Stack = createNativeStackNavigator()

export default function HomeNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
