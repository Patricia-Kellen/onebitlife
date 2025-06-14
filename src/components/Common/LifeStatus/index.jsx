import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import LottieView from "lottie-react-native";
import AnimationService from "../../../Services/AnimationService";

export default function LifeStatus({
  mindHabit,
  moneyHabit,
  bodyHabit,
  funHabit
}) {

  const [mind, setMind] = useState()
  const [money, setMoney] = useState()
  const [robot, setRobot] = useState()

  useEffect(()=>{
    AnimationService.animationStatus(
      mindHabit?.progressBar,
      moneyHabit?.progressBar,
      bodyHabit?.progressBar,
      funHabit?.progressBar,
      setMind,
      setMoney,
      setRobot
    )
  },[mindHabit, moneyHabit, bodyHabit, funHabit])

  return (
    <View style={styles.container}>
      <LottieView
        source={mind}
        autoPlay
        loop
        style={styles.educacaoAnimacao}
      />
      <LottieView
        source={money}
        autoPlay
        loop
        style={styles.financasAnimacao}
      />
      <LottieView
        source={robot}
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