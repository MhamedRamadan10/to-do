import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { List, Add, Single } from './../screen'


const Stack = createNativeStackNavigator()

export default function TasksNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
      <Stack.Screen name="Add" component={Add} options={{ headerShown: false }} />
      <Stack.Screen name="Single" component={Single} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
