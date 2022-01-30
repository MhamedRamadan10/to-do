import { useState } from 'react'
import { Pressable, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Constants } from './../../constants'
import { TDText } from './../../components'
import { TaskServices } from './../../services'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"

export default function Card({task, update, navigation}) {

  const [ isOpen, setIsOpen ] = useState(false)
  const [ doneLoading, setDoneLoading] = useState(false)
  const [ deleteLoading, setDeleteLoading] = useState(false)

  const edit = () => {
    global.task = task
    navigation.navigate('Single')
  }

  const done = () => {
    setDoneLoading(true)
    TaskServices.edit(task._id, {completed:!task.completed} , res => {
      setDoneLoading(false)
      setIsOpen(!isOpen)
      res.success ? update() : Toast.show('Something is wrong')
    })
  }

  const deleteTask = () => {
    setDeleteLoading(true)
    TaskServices.delete(task._id, res => {
      setDeleteLoading(false)
      setIsOpen(!isOpen)
      res.success ? update() : Toast.show('Something is wrong')
    })
  }

  return (
    <Pressable onPress={()=>setIsOpen(!isOpen)} style={styles.card} >
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Icon name={task.completed?'checkbox-marked':'checkbox-blank-outline'} style={styles.icon}/>
          <TDText t={task.description} style={[styles.title,{textDecorationLine:task.completed? 'line-through':'none'}]} />
        </View>
        <Icon name={isOpen?'chevron-up':'chevron-down'} style={styles.icon}/>
      </View>
      {isOpen &&(
        <View style={styles.actions}>

          <Pressable onPress={()=>done()} style={[styles.action,{backgroundColor:'#2c7da0'}]} >
            {doneLoading?
              <ActivityIndicator size="small" color='#fff'/> :
              <Icon name='check' style={styles.iconAction}/>
            }
            <TDText t={task.completed?'Re-Open':'Done'} style={styles.titleAction} />
          </Pressable>

          <Pressable onPress={()=>edit()} style={[styles.action,{backgroundColor:'#ff8500'}]} >
            <Icon name='pencil-outline' style={styles.iconAction}/>
            <TDText t='Edit' style={styles.titleAction} />
          </Pressable>

          <Pressable onPress={()=>deleteTask()} style={[styles.action,{backgroundColor:'#e63946'}]} >
            {deleteLoading?
              <ActivityIndicator size="small" color='#fff'/> :
              <Icon name='close' style={styles.iconAction}/>
            }
            <TDText t='Delete' style={styles.titleAction} />
          </Pressable>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card:{ backgroundColor:'#fff', padding:15, borderRadius:12, width:'95%',alignSelf:'center', marginTop:Constants.H*.02},
  wrapper:{ flexDirection:'row', justifyContent:'space-between',},
  actions:{ flexDirection:'row', justifyContent:'space-around',marginTop:10, paddingHorizontal:10},
  title:{flexDirection:'row',maxWidth:'85%', marginHorizontal:10},
  icon:{alignSelf:'center', fontSize:25, color:'#777'},
  action:{borderRadius:12, minWidth:'25%', flexDirection:'row', justifyContent:'center', padding:8},
  iconAction:{color:'#fff',fontSize:20},
  titleAction:{color:'#fff',fontSize:16},
})
