import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes';
import { StyleSheet } from 'react-native';

export default function App(){
  return(
    <>
    <StatusBar barStyle={"auto"}/>
      <Routes/>
    </>
  )
}