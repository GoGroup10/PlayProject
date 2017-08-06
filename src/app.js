/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
} from 'react-native';

import {Scene,Router} from 'react-native-router-flux';
import HomeView from './HomeView'
import LoginView from './LoginView'
import ArtistDetailView from './ArtistDetailView'

class PlayProject extends React.Component {
  render() {
    const isAndroid = Platform.OS ==='android'
    return (
      <Router>
        
        <Scene key="root">
          <Scene key="login" component={LoginView} hideNavBar/>  
          <Scene key="home" component={HomeView} hideNavBar/>
          <Scene key="artistDetail" component={ArtistDetailView} title={"Comentarios"} hideNavBar={false}/>
        </Scene>
      </Router>
    );
  }
}



AppRegistry.registerComponent('PlayProject', () => PlayProject);
