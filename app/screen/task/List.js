import { useEffect, useState, useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { TDScreen, TDText, TDInput, TDButton, Task } from './../../components'
import { FloatingAction } from "react-native-floating-action"
import { Constants } from './../../constants'
import { TaskServices } from './../../services'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import { useIsFocused } from "@react-navigation/native";

export default function List({ navigation }) {

  const isFocused = useIsFocused();
  const [ loading, setLoading ] = useState(true)
  const [ loadingNextPage, setLoadingNextPage] = useState(false)
  const [ tasks, setTasks ] = useState([])

  useEffect(()=> getTasks() ,[isFocused])

  const getTasks = (loading=true, forPagination=false) => {
    setLoading(loading)
    TaskServices.get(`?limit=12&skip=${forPagination?tasks.length:0}`, res=>{
      setLoading(false)
      setLoadingNextPage(false)
      if (res.data.length != 0)
        forPagination ? setTasks(tasks.concat(res.data)) : setTasks(res.data)
    })
  }

  const getNextPage = (arr) => {
    setLoadingNextPage(true)
    getTasks(false, true)
  }

  return (
    <>
    <TDScreen loading={loading} title='My To-Dos' action={false} getNextPage={()=>getNextPage(tasks)}>

      {!loading &&(
        tasks.length == 0 ? <TDText t='No to do, add new one ✍🏻' isCenter
          style={{fontSize:14, color:'#777', marginVertical:Constants.H*.25}}/>
          :
          tasks.map((task,k)=> <Task key={k} task={task} update={()=>getTasks(false)} navigation={navigation}/>)
        )}

        <View style={{height:80, justifyContent:'center'}}>
          <ActivityIndicator size="small" color={loadingNextPage?Constants.colors.baseColor:'#fafafa'} />
        </View>

      </TDScreen>

      <FloatingAction
        showBackground={false}
        color={Constants.colors.baseColor}
        onPressMain={()=> navigation.navigate('Add')}
        floatingIcon={<Icon name='plus' style={{fontSize:25, color:'#fff'}}/>}
      />
    </>

  )
}
