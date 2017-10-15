import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Actions as RouteActions} from 'react-native-router-flux';

import WelcomeForm from '../components/WelcomeForm';


class WelcomeContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <WelcomeForm onSumit={this.handleSubmit} />
        )
    }

    handleSubmit(teamName){
        RouteActions.tabbar
    }
}

export default WelcomeContainer