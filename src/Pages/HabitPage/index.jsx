import React, {useEffect, useState, useRef, setHabitInput} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SelectHabit from "../../components/HabitPage/SelectHabit";
import SelectFrequency from "../../components/HabitPage/SelectFrequency";
import Notification from "../../components/HabitPage/Notification";

export default function HabitPage({route}){
    const navigation = useNavigation()
    const [habitInput, setHabitInput] = useState()
    const [frequencyInput, setFreqencyInput] = useState()
    const [notificationToggle, setNotificationToggle] = useState()

    const {create, habit} = route.params

    return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.backPageBtn}
                        onPress={()=> navigation.goBack()}
                    >

                    <Image
                        source={require('../../assets/icons/arrowBack.png')}
                        style={styles.arrowBack}/>
                    </TouchableOpacity>
                    <View style={styles.mainContent}>
                        <Text style={styles.title}>Configurações {"\n"} de hábito</Text>
                        <Text style={styles.inputText}>Área</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.area}>{habit?.habitArea}</Text>
                        </View>

                        <Text style={styles.inputText}>Hábito</Text>
                        <SelectHabit habit={habit} habitInput={setHabitInput}/>

                        <Text style={styles.inputText}>Frequência</Text>
                        <SelectFrequency
                            habitFrequency={habit?.habitFrequency}
                            frequencyInput={setFreqencyInput}
                        />
                        {frequencyInput === "Mensal" ? null : (
                            <Notification
                                notificationToggle={notificationToggle}
                                setNotificationToggle={setNotificationToggle}
                            />
                        )}
                    </View>
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
    backPageBtn:{
        width:40,
        height:40,
        margin:25,
    },
    arrowBack:{
        width:40,
        height:40,
    },
    mainContent:{
        width:250,
        alignSelf:"center",
    },
    title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  inputText: {
    color: "white",
    fontSize: 16,
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  area: {
    color: "#BBBBBB",
    fontSize: 15,
  },
})