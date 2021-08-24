import React, { Component } from 'react';
import { Text, View,StatusBar,SafeAreaView,Platform, TouchableOpacity ,ImageBackground,Image} from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground source={require("../assets/bg_image.png")} style={styles.imageBackground}>
                    <View style={styles.titleBar}>
                <Text style={styles.titleText}>ISS TRACKER APP</Text>
                </View>
                //iss location button
                <TouchableOpacity style={styles.routeCard} onPress={()=>{
                    this.props.navigation.navigate("IssLocationScreen")
                }}>
                    <Text style={styles.routeText}>Iss Location</Text>
                    <Text style={styles.knowMore}>{"KNOW MORE--->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={()=>{
                    this.props.navigation.navigate("MeteorScreen")
                }}>
                    <Text style={styles.routeText}>Meterors</Text>
                    <Text style={styles.knowMore}>{"KNOW MORE--->"}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>UPDATES</Text>
                    <Text style={styles.knowMore}>{"KNOW MORE--->"}</Text>
                    <Text style={styles.bgDigit}>3</Text>
                    <Image source={require("../assets/rocket_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0
    },
    titleBar:{
flex:0.15,
justifyContent:"center",
alignItems: "center"
    },
    titleText:{
        color:"white"
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },
    routeText:{
        color:'black',
        fontSize:35,
        fontWeight:"bold",
        paddinfLeft:30,
        marginTop:75
    },
    imageBackground:{
        flex:1,
        resizeMode:'cover'
    },
    bgDigit:{
        position:"absolute",
        color : rgba(183,183,183,0.5),
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex :-1
    },
    knowMore:{
        color:"red",
        paddinfLeft:30,
        fontSize:15
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80
    }
})