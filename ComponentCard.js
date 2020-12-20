import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
// src cardLine 1
import raket1 from './img/racket1.jpg';
import raket2 from './img/racket2.jpg';
import love from './icon/heart.png';

// src cardLine2
import raket3 from './img/racket3.jpg';
import raket4 from './img/racket4.jpg';

//  src cardLine3
import raket5 from './img/racket5.jpg';
import raket6 from './img/racket6.jpg';

const ComponentCard = () => {
    return (
        <View>
            <CardLine1 />
            <CardLine2 />
            <CardLine3 />
        </View>
    )
}

const CardLine1 = () => {
    return (
        <View>
            <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between', marginLeft:15, marginRight:15}}>
                <View style={{width:160, height:270, elevation:5, borderRadius:10}}>
                    <Image  source={raket1}
                            style={{width:140, height:180, marginTop:15, marginLeft:10, marginRight:10, borderRadius:10 }}
                    />
                    <Text style={{marginLeft:12, marginTop:10, color:'#AFAFA5'}}>Raket Super Top</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginLeft:12, marginTop:10, color:'#508EF7'}}>Rp 300.000</Text>
                        <Image  source={love}
                                style={{width:18, height:18, marginTop:13, marginRight:16}}
                        />
                    </View>
                </View>
                
                <View style={{width:160, height:270, elevation:5, borderRadius:10}}>
                    <Image  source={raket2}
                            style={{width:140, height:180, marginTop:15, marginLeft:10, marginRight:10, borderRadius:10 }}
                    />
                    <Text style={{marginLeft:12, marginTop:10, color:'#AFAFA5'}}>Raket Junior + Bola</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginLeft:12, marginTop:10, color:'#508EF7'}}>Rp 450.000</Text>
                        <Image  source={love}
                                style={{width:18, height:18, marginTop:13, marginRight:16}}
                        />
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const CardLine2 = () => {
    return (
        <View>
            <View style={{flexDirection:'row', marginTop:5, justifyContent:'space-between', marginLeft:15, marginRight:15}}>
                <View style={{width:160, height:270, elevation:5, borderRadius:10}}>
                    <Image  source={raket3}
                            style={{width:140, height:180, marginTop:15, marginLeft:10, marginRight:10, borderRadius:10 }}
                    />
                    <Text style={{marginLeft:12, marginTop:10, color:'#AFAFA5'}}>Raket Super Top</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginLeft:12, marginTop:10, color:'#508EF7'}}>Rp 300.000</Text>
                        <Image  source={love}
                                style={{width:18, height:18, marginTop:13, marginRight:16}}
                        />
                    </View>
                </View>
                
                <View style={{width:160, height:270, elevation:5, borderRadius:10}}>
                    <Image  source={raket4}
                            style={{width:140, height:180, marginTop:15, marginLeft:10, marginRight:10, borderRadius:10 }}
                    />
                    <Text style={{marginLeft:12, marginTop:10, color:'#AFAFA5'}}>Raket Junior + Bola</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginLeft:12, marginTop:10, color:'#508EF7'}}>Rp 450.000</Text>
                        <Image  source={love}
                                style={{width:18, height:18, marginTop:13, marginRight:16}}
                        />
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const CardLine3 = () => {
    return (
        <View>
            <View style={{flexDirection:'row', marginTop:5, justifyContent:'space-between', marginLeft:15, marginRight:15}}>
                <View style={{width:160, height:270, elevation:5, borderRadius:10}}>
                    <Image  source={raket5}
                            style={{width:140, height:180, marginTop:15, marginLeft:10, marginRight:10, borderRadius:10 }}
                    />
                    <Text style={{marginLeft:12, marginTop:10, color:'#AFAFA5'}}>Raket Super Top</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginLeft:12, marginTop:10, color:'#508EF7'}}>Rp 300.000</Text>
                        <Image  source={love}
                                style={{width:18, height:18, marginTop:13, marginRight:16}}
                        />
                    </View>
                </View>
                
                <View style={{width:160, height:270, elevation:5, borderRadius:10}}>
                    <Image  source={raket6}
                            style={{width:140, height:180, marginTop:15, marginLeft:10, marginRight:10, borderRadius:10 }}
                    />
                    <Text style={{marginLeft:12, marginTop:10, color:'#AFAFA5'}}>Raket Junior + Bola</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginLeft:12, marginTop:10, color:'#508EF7'}}>Rp 450.000</Text>
                        <Image  source={love}
                                style={{width:18, height:18, marginTop:13, marginRight:16}}
                        />
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default ComponentCard;