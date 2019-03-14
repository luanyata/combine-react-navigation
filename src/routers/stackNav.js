import React from 'react'
import {createStackNavigator} from 'react-navigation'
import FeedScreen from "../screens/FeedScreen";
import {Ionicons} from '@expo/vector-icons'
import {Platform} from 'react-native'
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DashboardTabNav from "./tabNav";

export const FeedStack = createStackNavigator({
        Feed: {
            screen:  FeedScreen,
            navigationOptions: ({navigation}) => {
                return {
                    headerTitle: 'Feed',
                    headerLeft: (
                        <Ionicons style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()}
                                  name={Platform.select({ios: 'ios-menu', android: 'md-menu'})} size={30}/>
                    )
                };
            }
        },
        Detail: {
            screen: DetailScreen
        }
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    });


export const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Profile',
                headerLeft: (
                    <Ionicons style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()}
                              name={Platform.select({ios: 'ios-menu', android: 'md-menu'})} size={30}/>
                )
            };
        }
    }
});

export const SettingsStack = createStackNavigator({
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

export const DashboardStack = createStackNavigator({
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
