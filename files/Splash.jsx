import React,{Component, useEffect} from 'react';
import {Text, StyleSheet,View,ImageBackground, Image} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

const Splash = ({
    navigation,

}) => {
    useEffect(() => {
            setTimeout(() =>{
                navigation.navigate('Login')
            }, 3000);
    }, [])

    return (
        
        
        <View style={styles.home}>
            <Text>splash</Text>
            <Image source={require('../images/edusharp.png')} resizeMode='contain' style={{
                width:200
            }}/>

        </View>

        
    )
};


const styles = StyleSheet.create({
    home: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Splash;