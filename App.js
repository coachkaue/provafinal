import React from "react";
import { StatusBar } from "react-native";

import {NavigationContainer} from '@react-navigation/native'
import Routes from "./src/routes";
import ReactDOM from 'react-dom'

export default function App(){
    return(
        <NavigationContainer>
            <StatusBar backgroundColor="#38A69D"barStyle={"light-content"}/>
            <Routes/>
        </NavigationContainer>
    )
}

