import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNav, TasksNav } from './app/navigation'
import { useInit } from './app/hooks'
import AppContext  from './app/context/AppContext'
import AppLoading from 'expo-app-loading'

export default function App() {

  const [ hasAccount, setAccount ] = useState(false)
  const [ isReady, setReady ] = useState(false)
  const { init, fontsLoaded } = useInit(setAccount)


  if ( !isReady || !fontsLoaded )
  return  <AppLoading startAsync={init} onFinish={()=> setReady(true)} onError={console.warn}/>

  return (
    <AppContext.Provider value={{hasAccount, setAccount}}>
      <NavigationContainer>
        { hasAccount ? <TasksNav/> : <AuthNav/> }
      </NavigationContainer>
    </AppContext.Provider>
  )
}
