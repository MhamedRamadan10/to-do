import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CheckMail, Login, Register } from './../screen'


const Stack = createNativeStackNavigator()

export default function AuthNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="CheckMail">
      <Stack.Screen name="CheckMail" component={CheckMail} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
