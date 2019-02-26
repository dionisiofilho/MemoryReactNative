import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from '../pages/Main';



const appRoutes = createStackNavigator({
    Main: {
        screen: Main
    },
    
},{
    initialRouteName: 'Main',
});

const AppContainer = createAppContainer(appRoutes);

export default AppContainer;