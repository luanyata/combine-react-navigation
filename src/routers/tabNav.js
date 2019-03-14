import React from 'react';
import {createBottomTabNavigator} from 'react-navigation'
import SettingsStackNav from "./stackNavigations/settingsStackNav";
import FeedStackNav from './stackNavigations/feedStackNav'
import ProfileStackNav from './stackNavigations/profileStackNav'


const DashboardTabNav = createBottomTabNavigator({
    FeedStackNav,
    ProfileStackNav,
    SettingsStackNav
}, {
    navigationOptions: ({navigation}) => {

        console.log({navigation}, 'nav');

        const {routerName} = navigation.state.routes[navigation.state.index].routeName;
        return {
            header: null,
            headerTitle: {routerName}
        }
    }
});

export default DashboardTabNav;
