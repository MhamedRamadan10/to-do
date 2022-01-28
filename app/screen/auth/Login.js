import { useEffect, useState, useContext } from 'react'
import { Image } from 'react-native'
import { TDScreen, TDText, TDInput, TDButton } from './../../components'
import { LOGO } from './../../assets'
import { Constants } from './../../constants'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"


export default function Login({ navigation }) {

  const [ mail, setMail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)

  const login = () => {
    setLoading(true)
  }

  return (
    <TDScreen>

      <Image source={LOGO} style={{resizeMode:'contain', height:Constants.H*.3, width:Constants.W*.8, alignSelf:'center', marginVertical:Constants.H*.05}}/>

      <TDText t='Welcome to To Do app 👋🏻' isCenter isBold style={{marginBottom:Constants.H*.05}}/>

      <TDInput
        value={mail}
        setValue={setMail}
        placeholder='Enter your mail..'
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

    </TDScreen>
  )
}
