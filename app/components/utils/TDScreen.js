import React from 'react'
import { Text, Pressable, StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'

export default function TDScreen({children, style}) {

  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        <SafeAreaView >
          <View style={[style]}>{children}</View>
        </SafeAreaView>
    </ScrollView>
  )
}
