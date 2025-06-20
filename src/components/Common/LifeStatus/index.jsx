import { View, StyleSheet } from "react-native";
import React from "react";

import LottieView from "lottie-react-native";

export default function LifeStatus() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../assets/education/education-100.json")}
        autoPlay
        loop
        style={styles.educacaoAnimacao}
      />
      <LottieView
        source={require("../../../assets/money/money-100.json")}
        autoPlay
        loop
        style={styles.financasAnimacao}
      />
      <LottieView
        source={require("../../../assets/robot/robot-100-100.json")}
        autoPlay
        loop   
        style={styles.roboAnimacao}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  roboAnimacao: {
    width: 190,
    height: 250,
    marginTop: 30,
    marginLeft: 50,

  },
  educacaoAnimacao: {
    width: 100,
    height: 300,
    marginTop: 50,
    marginLeft: 7,
    position: "absolute",
  },
  financasAnimacao: {
    width: 100,
    height: 300,
    position: "absolute",
    marginTop: 50,
    marginLeft: 190,
  },
});