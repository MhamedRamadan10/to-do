import React from 'react'
import { ActivityIndicator, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Constants } from './../../constants'
import TDHeader from './TDHeader'

export default function TDScreen({children, loading, title, action, style}) {

  return (
    <View>
      {title &&(
        <TDHeader title={title} action={action}/>
      )}

      <ScrollView style={{backgroundColor:'#fafafa', padding:10, minHeight:Constants.H}}>
        <StatusBar backgroundColor='#fafafa' barStyle='dark-content' />

        <SafeAreaView >
          <View style={[style]}>{children}</View>
        </SafeAreaView>

        {loading &&(
          <ActivityIndicator style={{marginTop:Constants.H*.25}} size="small" color={Constants.colors.baseColor} />
        )}
        <View style={{marginBottom:100}}/>
      </ScrollView>
    </View>
  )
}
