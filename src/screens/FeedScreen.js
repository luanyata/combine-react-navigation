import React, {Component} from 'react'
import {View, Button, StyleSheet} from 'react-native'

class FeedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title='Go To Detail Screen' onPress={() => this.props.navigation.navigate('Detail')}/>
            </View>
        );
    }
}

export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
