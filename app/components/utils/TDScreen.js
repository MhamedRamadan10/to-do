import React from 'react'
import { ActivityIndicator, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Constants } from './../../constants'

export default function TDScreen({children, loading, style}) {

  return (
    <ScrollView style={{backgroundColor:'#fafafa', padding:10}}>
      <StatusBar backgroundColor='#fafafa' barStyle='dark-content' />

      <SafeAreaView >
        <View style={[style]}>{children}</View>
      </SafeAreaView>

      {loading &&(
        <ActivityIndicator style={{marginTop:Constants.H*.25}} size="small" color={Constants.colors.baseColor} />
      )}
    </ScrollView>
  )
}
