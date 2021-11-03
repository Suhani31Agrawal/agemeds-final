import React from 'react';
import LottieView from 'lottie-react-native';

export default class AdviceAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/advice.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}