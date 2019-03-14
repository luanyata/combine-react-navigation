import React from 'react'
import {createDrawerNavigator} from 'react-navigation'
import {DashboardStack} from "./stackNav";


const AppDrawerNav = createDrawerNavigator({
    Dashboard:  DashboardStack
});

export default AppDrawerNav;
