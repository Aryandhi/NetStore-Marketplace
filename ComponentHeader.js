import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import lineMenu from './icon/menu1.png';
import shopChart from './icon/shopping-cart.png';
import bel from './icon/bell.png';
import search from './icon/loupe.png';

const ComponentHeader = () => {
    return (
        <View>
            <Head />
        </View>
    )
}

const Head = () => {
    return (
        <View style={{backgroundColor: '#3D80F5', width: 360, height:200, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
            <View style={{flexDirection:'row', marginTop:15}}>
                <Image  source={lineMenu} 
                        style={{width:30, height:30, marginLeft: 10, flex:0}}
                />
                <Text style={{color:'#FFFFFF', fontSize:21, flex:0, marginLeft:20}}>
                    Net Store
                </Text>

                <Image  source={shopChart}
                        style={{width:30, height:30, marginLeft: 110, flex:0}}
                />
                <Image  source={bel}
                        style={{width:30, height:30, marginLeft: 20, flex:0}}
                />
            </View>
            
            <View style={{marginTop:30, marginLeft:10}}>
                <Text style={{color:'#FFFFFF', fontSize:30}}>Kencangkan Raketmu</Text>
                <Text style={{color:'#FFFFFF', fontSize:20}}>dan Melompatlah yang tinggi !</Text>
            </View>
            
            <View style={{flexDirection:'row'}}>
                <TextInput style={{flex: 0, borderWidth:0, width:280, borderRadius:10, 
                                    marginLeft:25, marginTop:30, elevation:3, fontSize:12, paddingLeft:10, backgroundColor:'#FFFFFF'}}>
                    Search                    
                </TextInput>
                
                <Image  source={search}
                        style={{width:30, height:30, marginLeft:10, marginTop:40, flex:0}}
                />
            </View>
            
        </View>
    )
}

export default ComponentHeader;