import React from "react";
import {useNavigation} from "@react-navigation/native"
import { ScrollView, View , Text, StyleSheet} from "react-native";
import LifeStatus from "../../components/Common/LifeStatus"

export default function Home(){
    const navigation = useNavigation()

    function handleNavExplanation(){
        navigation.navigate("AppExplanation")
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>
                    <LifeStatus/>
                    <Text 
                        style={styles.explanationText}
                        onPress={() =>{
                            handleNavExplanation()
                        }}  
                    >Ver explicações novamente</Text>
                </View>
            </ScrollView>
        </View>
    )
}

 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(21, 21, 21, 0.98)",
    },
    dailyChecks:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize: 18,
        marginTop: 60,
    },
    explanationText:{
        color:"white",
        fontSize:16,
        fontWeight: "bold",
        textAlign:"center",
        paddingTop:15,
        paddingBottom:25,
    },
 })