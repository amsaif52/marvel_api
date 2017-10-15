import React, {Container} from 'react';
import {Voew, Text, StyleSheet} from 'react-native';

class TeamProfileScene extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TeamProfileContainer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    }
})

export default TeamProfileScene