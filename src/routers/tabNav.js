import React from 'react';
import {Platform} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import SettingsStackNav from "./stackNavigations/settingsStackNav";
import FeedStackNav from './stackNavigations/feedStackNav'
import ProfileStackNav from './stackNavigations/profileStackNav'
import {Ionicons} from '@expo/vector-icons'


const DashboardTabNav = createBottomTabNavigator({
        Feed: {
            screen: FeedStackNav,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return <Ionicons name={Platform.select({ios: 'ios-home', android: 'md-home'})} size={25}
                                     color={tintColor}/>
                }
            }
        },
        Profile: {
            screen: ProfileStackNav,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return <Ionicons name={Platform.select({ios: 'ios-person', android: 'md-person'})} size={25}
                                     color={tintColor}/>
                }
            }
        },
        Settings: {
            screen: SettingsStackNav,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => {
                    return <Ionicons name={Platform.select({ios: 'ios-settings', android: 'md-settings'})} size={25}
                                     color={tintColor}/>
                }
            }
        }
    },
    {
        navigationOptions: ({navigation}) => {
            return {
                header: null,
            }
        },
    },
);

export default DashboardTabNav;
