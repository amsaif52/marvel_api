import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TeamSelectorContainer from '../containers/TeamSelectorContainer';

class TeamSelectorScene extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TeamSelectorContainer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F0F3BD'
    }
})

export default TeamSelectorScene