import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const Click = (val ?: string) =>{
    console.warn(val);
  }

  const [name, setName] = useState("Ishan")

  const testUpdate = () => {
    setName("Pranav")
  }
  return (
    <View style = {style.container} >
      <Text style = {style.textstyle} >Hello World !</Text>
     
      <UserData name = {name}/>
      {/* <Button title='Click Me !' onPress={Click} color={'green'}/> */}
      <Button title='Click Me !' onPress={()=>Click("Hello world")} color={'red'}/>
      <Button title = "Update state" onPress={testUpdate} color={'blue'}/>
      <StatusBar style='dark' />
    </View>
   
  );
};

const UserData = (props) => {
  return (
    <View >
       <Text> Name :{props.name} Undre</Text>
      <Text> Age : 20</Text>
      <Text> Email : ishanundre2004@gmail.com </Text>
    </View>
  );
}


const style = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  textstyle : {
    fontSize : 30,
  }
})

export default App;