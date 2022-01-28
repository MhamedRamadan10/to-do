import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNav } from './app/navigation'
import { LogBox } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {

  const [ isReady, setReady ] = useState(false)

  LogBox.ignoreAllLogs()

  let [ fontsLoaded ] = useFonts({
    'Tajawal-Medium': require('./app/assets/fonts/Tajawal-Medium.ttf'),
    'Tajawal-Bold': require('./app/assets/fonts/Tajawal-Bold.ttf'),
  });

  if ( !fontsLoaded )
  return  <AppLoading startAsync={fontsLoaded} onFinish={()=> setReady(true)} onError={console.warn}/>

  return (
    <NavigationContainer>
      <AuthNav/>
    </NavigationContainer>
  )
}
