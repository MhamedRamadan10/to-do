import React from 'react'
import { Text, Pressable, StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'

export default function TDScreen({children, style}) {

  return (
    <ScrollView style={{backgroundColor:'#fafafa', padding:10}}>
        <StatusBar backgroundColor='#fafafa' barStyle='dark-content' />
        <SafeAreaView >
          <View style={[style]}>{children}</View>
        </SafeAreaView>
    </ScrollView>
  )
}
