import React, { useEffect, useState } from "react";
import {Image,StyleSheet} from "react-native"
import { SelectList } from "react-native-dropdown-select-list";
import HabitData from "../../../Database/HabitData";

export default function SelectHabit({habit, habitInput}){
    const [selected, setSelected] = useState((habit?.habitName ? habit?.habitName : "-"))

    const [data, setData] = useState()

    useEffect(()=>{
        if(habit?.habitArea === "Mente"){
            setData(HabitData.dataMind)
        }
        if(habit?.habitArea === "Financeiro"){
            setData(HabitData.dataMoney)
        }
        if(habit?.habitArea === "Corpo"){
            setData(HabitData.dataBody)
        }
        if(habit?.habitArea === "Humor"){
            setData(HabitData.dataFun)
        }
        habitInput(habit?.habitName ? habit?.habitName : undefined) 
    }, [])

    return(<>
        <SelectList
            setSelected={setSelected}
            data={data}
            search={false}
            onSelect={()=>{
                habitInput(selected)
            }}
            placeholder={selected}
            boxStyles={styles.boxStyles}
            inputStyles={styles.inputStyles}
            dropdownStyles={styles.dropdownStyles}
            dropItemStyles={styles.dropItemStyles}
            dropdownTextStyles={styles.dropdownTextStyles}
            arrowicon={
                <Image
                source={require("../../../assets/icons/arrowDropdown.png")}
                style={styles.arrow}
            />
            }
         >
           
        </SelectList>
        </>
    )
}

const styles = StyleSheet.create({
    boxStyles:{
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    inputStyles:{
        color: "white",
    },
    dropdownStyles:{
        borderWidth: 0,
    },
    dropItemStyles:{
        borderWidth: 1,
        borderColor: "#BBBB",
        borderRadius:10,
        marginBottom: 15,
    },
    dropdownTextStyles:{
        color: "#BBBBBB",
    },
    arrow:{
        width: 20,
        height: 20,
    },
})