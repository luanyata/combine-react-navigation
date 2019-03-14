import React from 'react';
import {createBottomTabNavigator} from 'react-navigation'
import {FeedStack, ProfileStack, SettingsStack} from "./stackNav";


const DashboardTabNav = createBottomTabNavigator({
    FeedStack,
    ProfileStack,
    SettingsStack
}, {
    navigationOptions: ({navigation}) => {
        const {routerName} = navigation.state.routes[navigation.state.index];
        return {
            header: null,
            headerTitle: routerName
        }
    }
});

export default DashboardTabNav;
