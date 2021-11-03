import React from 'react';
import LottieView from 'lottie-react-native';

export default class SettingsAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/settings.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}