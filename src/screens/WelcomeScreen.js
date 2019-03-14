import React, {Component} from 'react'
import {View, Button, StyleSheet} from 'react-native'

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title='Login' onPress={() => this.props.navigation.navigate('Dashboard')}/>
                <Button title='SignUp' onPress={() => alert('Button pressed')}/>
            </View>
        );
    }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
