import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LoginStack } from './components/Router';
import { Font, AppLoading } from 'expo'
import { MaterialIcons } from '@expo/vector-icons'

export default class App extends React.Component {
	constructor() {
	    super()
	    this.state = {
	      fontsAreLoaded: false
	    }
  	}
  async componentWillMount() {
    await Font.loadAsync({
    	'Material Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
    	'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf")
     })
    this.setState({ fontsAreLoaded: true })
  }
  render() {

    	const { fontsAreLoaded } = this.state
    	return !fontsAreLoaded ? <AppLoading /> :  <LoginStack />
  }
}
