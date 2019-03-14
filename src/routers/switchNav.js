import React from 'react'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import WelcomeScreen from "../screens/WelcomeScreen";
import AppDrawerNav from "./drawerNav";

/**
 *The purpose of SwitchNavigator is to only ever show one screen at a time.
 * By default, it does not handle back actions and it resets routes to their default state when you switch away.
 * This is the exact behavior that we want from the authentication flow.
 * **/

const AppSwitchNav = createSwitchNavigator(
    {
        Welcome: {screen: WelcomeScreen},
        Dashboard: {screen: AppDrawerNav}
    }
);


const AppContainer = createAppContainer(AppSwitchNav);

export default AppContainer;
