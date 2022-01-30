import { useEffect, useState, useContext } from 'react'
import { TDScreen, TDText, TDInput, TDButton, TDHeader } from './../../components'
import { FloatingAction } from "react-native-floating-action"
import { Constants } from './../../constants'
import { TaskServices } from './../../services'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"

export default function Single({ navigation }) {

  const [ loading, setLoading ] = useState(false)
  const [ task, setTask ] = useState('')

  useEffect(()=> setTask(global.task.description) ,[])

  const edit = () => {
    setLoading(true)
    TaskServices.edit(global.task._id, {description:task} , res => {
      setLoading(false)
      res.success ? navigation.navigate('List') : Toast.show('Something is wrong')
    })
  }

  return (
    <TDScreen>
      <TDHeader title='Task details' action={()=>navigation.goBack()}/>

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
        text='Edit'
        loading={loading}
        action={edit}
      />

    </TDScreen>

  )
}
