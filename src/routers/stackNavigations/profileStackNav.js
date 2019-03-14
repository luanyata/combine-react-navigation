import React from 'react'
import {createStackNavigator} from "react-navigation";
import ProfileScreen from "../../screens/ProfileScreen";
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native";

const ProfileStackNav = createStackNavigator({
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

export default ProfileStackNav
