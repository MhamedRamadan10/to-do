import { useEffect, useState, useContext } from 'react'
import { TDScreen, TDText, TDInput, TDButton, TDHeader } from './../../components'
import { FloatingAction } from "react-native-floating-action"
import { Constants } from './../../constants'
import { TaskServices } from './../../services'
import Toast from 'react-native-simple-toast'

export default function Add({ navigation }) {

  const [ loading, setLoading ] = useState(false)
  const [ task, setTask ] = useState('')


  const add = () => {
    if (!task.trim()) Toast.show('Please, Enter description')
    else {
      setLoading(true)
      TaskServices.add({description:task} , res => {
        setLoading(false)
        res.success ? navigation.navigate('List') : Toast.show('Something is wrong')
      })
    }
  }

  return (
    <TDScreen>
      <TDHeader title='Add Task' action={()=>navigation.goBack()}/>

      <TDInput
        value={task}
        setValue={setTask}
        placeholder='Enter details..'
        style={{width:'90%',textAlignVertical: 'top'}}
        autoFocus
        numberOfLines={6}
      />

      <TDButton
        style={{marginTop:Constants.H*.025}}
        text='Add'
        loading={loading}
        action={add}
      />

    </TDScreen>

  )
}
