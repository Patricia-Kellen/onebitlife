import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import {useNavigation} from "@react-navigation/native"

import LifeStatus from "../../components/Common/LifeStatus";
import DefaultButton from "../../components/Common/DefaultButton";

export default function Start() {
const navigation = useNavigation()

const handleNavAppExplanation = () =>{
  navigation.navigate("AppExplanation")
}


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/icons/logo3.png")}
            style={styles.logo}
          />
          <LifeStatus 
          handlePress={handleNavAppExplanation}/>
          <Text style={styles.description}>
            Vamos transformar sua vida {"\n"} em um jogo, buscando sempre {"\n"} o melhor nível.
          </Text>
          <DefaultButton
          buttonText={"Continuar"}
          handlePress={handleNavAppExplanation}
          width={250}
          height={50}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 65,
    marginBottom: 20,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  },
});