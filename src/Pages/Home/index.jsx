import React, {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native"
import { ScrollView, View , Text, StyleSheet} from "react-native";
import LifeStatus from "../../components/Common/LifeStatus"
import StatusBar from "../../components/Home/StatusBar";
import CreateHabit from "../../components/Home/CreateHabit";
import EditHabit from "../../components/Home/EditHabit";

export default function Home({habit, frequency, habitArea, checkColor}){
    const navigation = useNavigation()
    const [mindHabit,setMindHabit] = useState()
    const [moneyHabit,setMoneyHabit] = useState()
    const [bodyHabit,setBodyHabit] = useState()
    const [funHabit,setFunHabit] = useState()

    function handleNavExplanation(){
        navigation.navigate("AppExplanation")
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>

                    <LifeStatus/>

                    <StatusBar/>

                    {mindHabit ? (
                        <EditHabit
                            habit={mindHabit?.habitName}
                            frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`}
                            habitArea={mindHabit?.habitArea}
                            checkColor="#90B7F3"
                            />
                     ) : (
                          <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
                     )}


                    {moneyHabit ? (
                        <EditHabit
                            habit={moneyHabit?.habitName}
                            frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
                            habitArea={moneyHabit?.habitArea}
                            checkColor="#85BB65"
                        />
                    ) : (
                        <CreateHabit habitArea="Financeiro" borderColor="#85BB65"/>
                    )}


                    {bodyHabit ? (
                        <EditHabit
                            habit={bodyHabit?.habitName}
                            frequency={`${mindHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
                            habitArea={bodyHabit?.habitArea}
                            checkColor="#FF0044"
                        />
                    ) : (
                        <CreateHabit habitArea="Corpo" borderColor="#FF0044"/>
                    )}


                    {funHabit ? (
                        <EditHabit
                            habit={funHabit?.habitName}
                            frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
                            habitArea={funHabit?.habitArea}
                            checkColor="#FE7F23"
                        />
                    ) : (
                        <CreateHabit habitArea="Humor" borderColor="#FE7F23"/>
                    )}

                    
                </View>

                <Text 
                        style={styles.explanationText}
                        onPress={() =>{
                            handleNavExplanation()
                        }}  
                    >Ver explicações novamente</Text>
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
        marginTop: 50,
    },
    explanationText:{
        color:"white",
        fontSize:16,
        fontWeight: "bold",
        textAlign:"center",
        paddingTop:10,
        paddingBottom:30,
    },
 })