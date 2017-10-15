import React, {Component, PropTypes} from 'react';
import {View, Image, Text} from 'react-native';


class Character extends Component{
    render(){
        let {characterThumbnail, name} = this.props;
        return(
            <View style={styles.container}>
                <Image source={{uri: characterThumbnail}} style={styles.Image}/>
                <Text style={styles.text}>
                    {name}
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    image:{
        width: 400,
        height: 300
    },
    text:{
        fontSize: 16,
        alignSelf: 'center',
        color: 'green',
        marginTop: 25
    }
})

Character.propTypes = {
    characterThumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Character