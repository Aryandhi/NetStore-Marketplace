import React from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';
import Header from './ComponentHeader';
import Card from './ComponentCard';

const App = () => {
  return (
    <ScrollView>
      <View>
          <Header />
          <Text style={{marginTop:40, marginLeft:10, fontSize:20}}>Categories</Text>
          <Categories />
          <Text style={{marginTop:15, marginLeft:10, fontSize:20}}>Features Products</Text>
          <Card />
          <Footer />
       </View>
    </ScrollView>
  )
}

const Categories = () => {
  return (
    <View style={{flexDirection:'row'}}>
      <View style={{marginLeft:15, marginTop:5, backgroundColor:'#95a5a6', elevation:3,  width:70, height:30, padding:12, justifyContent:'center', borderRadius:5}}>
        <Text>Racket</Text>
      </View>

      <View style={{marginLeft:5, marginTop:5, backgroundColor:'#FFFFFF', elevation:3,  width:100, height:30, padding:12, justifyContent:'center', borderRadius:5}}>
        <Text>Senar Raket</Text>
      </View>

      <View style={{marginLeft:5, marginTop:5, backgroundColor:'#FFFFFF', elevation:3,  width:100, height:30, padding:12, justifyContent:'center', borderRadius:5}}>
        <Text>Shuttlecock</Text>
      </View>

      <View style={{marginLeft:5, marginTop:5, backgroundColor:'#FFFFFF', elevation:3,  width:100, height:30, padding:12, justifyContent:'center', borderRadius:5}}>
        <Text>Tas Raket</Text>
      </View>
    </View>
  )
}

const Footer = () => {
  return (
    <View style={{width:360, height:25, marginTop:5, backgroundColor:'#3D80F5'}}>
      <Text style={{marginLeft:25}}>CreativeCode : Aryandhi | aryandh.a.w@gmail.com</Text>
    </View>
  )
}
export default App;