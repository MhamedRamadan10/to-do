import { useEffect, useState, useContext } from 'react'
import { TDHeader, TDScreen, TDInput, TDButton } from './../../components'
import { Constants } from './../../constants'
import { AuthServices } from './../../services'
import { isValidEmail } from './../../core/Helpers'
import Toast from 'react-native-simple-toast'
import AppContext from './../../context/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Register({ navigation }) {

  const [ name, setName] = useState('')
  const [ age, setAge] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)

  const { setAccount } = useContext(AppContext)

  const signUp = () => {
    if (!isValid()) return
    setLoading(true)
    AuthServices.register({ name, age, email, password }, async res=> {
      setLoading(false)
      if (res == 'error') Toast.show('Something is wrong, please enter valid data')
      else {
        await AsyncStorage.setItem('@user-data', JSON.stringify(res))
        setAccount(true)
      }
    })
  }
  const isValid = () => {
    if (!email.trim() || !name.trim() || !password.trim() || !age.trim()) {
      Toast.show('Please, fill required inputs')
      return false
    }else if (!isValidEmail(email)) {
      Toast.show('Please, enter valid email')
      return false
    }else if (password.length < 6) {
      Toast.show('Please, enter valid password')
      return false
    }else if (age.length > 2) {
      Toast.show('Please, enter valid age')
      return false
    }
    return true
  }

  return (
    <TDScreen>
      <TDHeader title='Sign Up' action={()=>navigation.goBack()}/>

      <TDInput
        value={name}
        setValue={setName}
        placeholder='Enter your name..'
        style={{width:'90%'}}
        autoFocus
      />

      <TDInput
        value={email}
        setValue={setEmail}
        placeholder='Enter your email..'
        style={{width:'90%'}}
        keyboardType='email-address'
      />

      <TDInput
        value={password}
        setValue={setPassword}
        placeholder='Enter password..'
        style={{width:'90%'}}
        isPassword
      />

      <TDInput
        value={age}
        setValue={setAge}
        placeholder='Enter age..'
        style={{width:'90%'}}
        keyboardType='number-pad'
      />

      <TDButton
        style={{marginTop:Constants.H*.025}}
        text='Sign Up'
        loading={loading}
        action={signUp}
      />

    </TDScreen>
  )
}
