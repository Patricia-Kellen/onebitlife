import React, { useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native"
import { ScrollView, View , Text, StyleSheet} from "react-native";

import LifeStatus from "../../components/Common/LifeStatus"
import StatusBar from "../../components/Home/StatusBar";
import CreateHabit from "../../components/Home/CreateHabit";
import EditHabit from "../../components/Home/EditHabit";
import ChangeNavigationService from "../../Services/ChangeNavigationService"
import HabitsService from "../../Services/HabitsService";

export default function Home({habit, frequency, habitArea, checkColor}){
    const navigation = useNavigation()
    const [mindHabit,setMindHabit] = useState()
    const [moneyHabit,setMoneyHabit] = useState()
    const [bodyHabit,setBodyHabit] = useState()
    const [funHabit,setFunHabit] = useState()

    const [robotDaysLife, setRobotDayLife] = useState()
    const today = new Date()

    useEffect(()=>{
        HabitsService.findByArea("Mente").then((mind)=>{
            setMindHabit(mind[0])
        })
        HabitsService.findByArea("Financeiro").then((money)=>{
            setMindHabit(money[0])
        })
        HabitsService.findByArea("Corpo").then((body)=>{
            setMindHabit(body[0])
        })
        HabitsService.findByArea("Humor").then((fun)=>{
            setMindHabit(fun[0])
        })

        ChangeNavigationService.checkShowHome(1)
        .then((showHome)=>{
            const formDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
            const checkDays = 
            new Date(formDate) - new Date(showHome.appStartData) + 1

            setRobotDayLife(checkDays.toString().padStart(2, "0"))
        })
        .catch((err)=> console.log(err))
    }, [route.params])

    function handleNavExplanation(){
        navigation.navigate("AppExplanation")
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.dailyChecks}>❤️ {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"}✔️ 80 checks</Text>

                    <LifeStatus/>

                    <StatusBar/>

                    {mindHabit ? (
                        <EditHabit
                            habit={mindHabit} 
                            checkColor="#90B7F3"
                            />
                     ) : (
                          <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
                     )}


                    {moneyHabit ? (
                        <EditHabit
                            habit={moneyHabit}
                            checkColor="#85BB65"
                        />
                    ) : (
                        <CreateHabit habitArea="Financeiro" borderColor="#85BB65"/>
                    )}


                    {bodyHabit ? (
                        <EditHabit
                            habit={bodyHabit}
                            checkColor="#FF0044"
                        />
                    ) : (
                        <CreateHabit habitArea="Corpo" borderColor="#FF0044"/>
                    )}


                    {funHabit ? (
                        <EditHabit
                            habit={funHabit}
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