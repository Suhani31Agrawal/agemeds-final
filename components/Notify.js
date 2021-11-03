import React from 'react';
import LottieView from 'lottie-react-native';

export default class NotifyAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/notification.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}