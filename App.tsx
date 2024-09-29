import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

const {width : screenWidth} = Dimensions.get('window')
const App = () => {
  const Click = (val ?: string) =>{
    console.warn(val);
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [display, setDisplay] = useState(false)

  const resetForm=()=>{
    setDisplay(false)
    setEmail("")
    setName("")
    setPass("")
  };

  // const testUpdate = () => {
  //   setName("Pranav")
  // }
  return (
    <View style = {style.container} >
      {/* <Text style = {style.textstyle} >Hello World !</Text> */}
     
      {/* <UserData name = {name}/> */}
      {/* <Button title='Click Me !' onPress={Click} color={'green'}/> */}
      {/* <Button title='Click Me !' onPress={()=>Click("Hello world")} color={'red'}/> */}
      {/* <Button title = "Update state" onPress={testUpdate} color={'blue'}/> */}
      {/* <Text style ={style.textstyle}>Hi {name}</Text>
      <TextInput 
        style = {style.textinput}
        placeholder='Enter your name'
        onChangeText={(text)=>setName(text)}
        /> */}
      <Text style={{fontSize : 20}}> Making Simple form in React Native</Text>
      <TextInput 
        placeholder='Enter your name here...'
        style = {style.textinput}
        onChangeText={(text)=>setName(text)}
        value={name}
        ></TextInput>

        <TextInput 
        placeholder='Enter your email here...'
        style = {style.textinput}
        onChangeText={(text)=>setEmail(text)}
        value={email}
        ></TextInput>

        <TextInput 
        placeholder='Set the password...'
        style = {style.textinput}
        onChangeText={(text)=>setPass(text)}
        value={pass}
        ></TextInput>
        
        <View style = {style.button}>
          <Button title='Get Details' color={"green"} onPress={()=>setDisplay(true)} />
        </View>

        <View style = {style.button}>
          <Button title='Clear Details' onPress={resetForm}/>
        </View>

        <View>
          {
            display ? 
            <View>
              <Text style = {style.textstyle}> Name : {name}</Text>
              <Text style = {style.textstyle}> Email : {email}</Text>
              <Text style = {style.textstyle}> Password : {pass}</Text>
            </View>
            : null
          } 
        </View>


        

      <StatusBar style='auto' />
    </View>
   
  );
};


// const UserData = (props) => {
//   return (
//     <View >
//        <Text> Name :{props.name} Undre</Text>
//       <Text> Age : 20</Text>
//       <Text> Email : ishanundre2004@gmail.com </Text>
//     </View>
//   );
// }


const style = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop : 50,
    justifyContent : 'flex-start',
    alignItems : 'flex-start',
  },
  textstyle : {
    fontSize : 30,
  }, 
  textinput : {
    margin: 10,
    fontSize :15,
    borderColor :'blue',
    borderWidth : 2,
    alignItems : "center",
    padding :10,
    width :screenWidth * 0.95,
  },
  button : {
    marginBottom : 10,
    width : screenWidth * 0.95,
    alignItems : "center",
  }
})

export default App;