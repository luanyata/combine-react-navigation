import React from 'react'
import {createStackNavigator} from "react-navigation";
import FeedScreen from "../../screens/FeedScreen";
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native";
import DetailScreen from "../../screens/DetailScreen";

const FeedStackNav = createStackNavigator({
        Feed: {
            screen: FeedScreen,
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


export default FeedStackNav
