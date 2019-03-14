import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {Ionicons} from '@expo/vector-icons'
import {Platform} from 'react-native'
import DashboardTabNav from "../tabNav";

const DashboardStackNav = createStackNavigator({
    DashboardTabNav: DashboardTabNav
}, {
    defaultNavigationOptions: ({navigation}) => {
        return {
            headerLeft: (
                <Ionicons style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()}
                          name={Platform.select({ios: 'ios-menu', android: 'md-menu'})} size={30}/>
            )
        }
    }
});

export default DashboardStackNav
