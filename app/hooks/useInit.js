import React , { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LogBox } from 'react-native'
import { useFonts } from 'expo-font';
import './../core/Interceptor'
import 'react-native-gesture-handler'

LogBox.ignoreAllLogs()


export default useInit = (setAccount) => {

  const init = async () => {
    const user = await AsyncStorage.getItem('@user-data')
    setAccount(user)
  }

  let [ fontsLoaded ] = useFonts({
    'Tajawal-Medium': require('./../assets/fonts/Tajawal-Medium.ttf'),
    'Tajawal-Bold': require('./../assets/fonts/Tajawal-Bold.ttf'),
  });

  return { init, fontsLoaded }
};
