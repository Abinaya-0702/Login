import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import Bg from './Bg';
import Field from './Field';
import Button from './Button';

const Home = () => {
    return (
        <Bg>
          <View style={{alignItems:"center",width:400}}>
            <Text style={{color:"white", fontSize:64, fontWeight:'bold', marginVertical:10}}>
              Login
            </Text>
            <View style={{backgroundColor:"white", height:600, width:430, 
            borderTopLeftRadius: 110, borderTopRightRadius:110, paddingTop:100}}>
              <Text style={{fontSize:50, color:"#003297", fontWeight:'bold', textAlign:'center'}}>
                Welcome
              </Text>
              <View style={{alignItems:'center'}}>
              <Field placeholder="Username"/>
              <Field placeholder="Password" secureTextEntry={true}/>
              </View>
              <View style = {{width:'80%',flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                <Text style={{color:"#003297", fontWeight:'bold', fontSize:16, marginBottom:200}}>
                  Forgot Password?
                </Text>
              </View>
              <Button textColor="white" bgColor="#003297" alignItems='center' btnLabel="Login" Press={()=> alert("Logged in")}/>
              <View style={{flex:4, flexDirection:'row', justifyContent:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Don't have an account? </Text>
                <TouchableOpacity>
                  <Text style={{color:"#003297", fontSize:20, fontWeight:'bold'}}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
        </Bg>
      );
}

export default Home;