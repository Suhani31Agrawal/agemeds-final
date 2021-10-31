import React from 'react';
import LottieView from 'lottie-react-native';

export default class MediAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/24867-online-doctor-app.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}
