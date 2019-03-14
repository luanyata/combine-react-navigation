import React from 'react'
import {createStackNavigator} from "react-navigation";
import SettingsScreen from "../../screens/SettingsScreen";
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native";

const SettingsStackNav = createStackNavigator({
    Settings: {
        screen: SettingsScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Settings',
                headerLeft: (
                    <Ionicons style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()}
                              name={Platform.select({ios: 'ios-menu', android: 'md-menu'})} size={30}/>
                )
            }
        }
    }
});


export default SettingsStackNav
