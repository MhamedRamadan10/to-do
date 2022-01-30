import { useEffect, useState, useContext } from 'react'
import { Image , Pressable } from 'react-native'
import { TDScreen, TDText, TDInput, TDButton } from './../../components'
import { LOGO } from './../../assets'
import { Constants } from './../../constants'
import { AuthServices } from './../../services'
import { isValidEmail } from './../../core/Helpers'
import Toast from 'react-native-simple-toast'
import AppContext from './../../context/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Login({ navigation }) {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)

  const { setAccount } = useContext(AppContext)

  const login = () => {
    if (!isValid()) return
    setLoading(true)
    AuthServices.login({ email, password }, async res => {
      setLoading(false)
      if (res == 'error') Toast.show('Something is wrong, please enter valid data')
      else {
        await AsyncStorage.setItem('@user-data', JSON.stringify(res))
        setAccount(true)
      }
    })
  }
  const isValid = () => {
    if (!email.trim() || !password.trim()) {
      Toast.show('Please, fill required inputs')
      return false
    }else if (!isValidEmail(email)) {
      Toast.show('Please, enter valid email')
      return false
    }else if (password.length < 6) {
      Toast.show('Please, enter valid password')
      return false
    }
    return true
  }

  return (
    <TDScreen>

      <Image source={LOGO} style={{resizeMode:'contain', height:Constants.H*.3, width:Constants.W*.8, alignSelf:'center', marginVertical:Constants.H*.05}}/>

      <TDText t='Welcome to To Do app 👋🏻' isCenter isBold style={{marginBottom:Constants.H*.05}}/>

      <TDInput
        value={email}
        setValue={setEmail}
        placeholder='Enter your email..'
        style={{width:'90%'}}
        autoFocus
        keyboardType='email-address'
      />

      <TDInput
        value={password}
        setValue={setPassword}
        placeholder='Enter password..'
        style={{width:'90%'}}
        isPassword
      />

      <TDButton
        style={{marginTop:Constants.H*.025}}
        text='Login'
        loading={loading}
        action={login}
      />

      <TDText t={`Don't have an account?`} isCenter style={{marginTop:Constants.H*.05}}/>

      <Pressable onPress={()=>navigation.navigate('Register')}>
        <TDText t={`Sign Up`} isCenter isBold />
      </Pressable>

    </TDScreen>
  )
}
