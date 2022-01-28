import { useEffect, useState, useContext } from 'react'
import { Image } from 'react-native'
import { TDScreen, TDText } from './../../components'
import { LOGO } from './../../assets'
import { Constants } from './../../constants'

import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"


export default function CheckMail({ navigation }) {

  return (
    <TDScreen>
      <Image source={LOGO} style={{resizeMode:'contain', height:Constants.H*.3, width:Constants.W*.8, alignSelf:'center', marginVertical:Constants.H*.05}}/>
      <TDText t='CheckMail'/>
    </TDScreen>
  )
}
