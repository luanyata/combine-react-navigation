import React from 'react'
import {createDrawerNavigator} from 'react-navigation'
import DashboardStackNav from "./stackNavigations/dashboardStackNav";
import StoreStackNav from "./stackNavigations/storesStackNav";


const AppDrawerNav = createDrawerNavigator({
    Dashboard: DashboardStackNav,
    Store: StoreStackNav
});

export default AppDrawerNav;
