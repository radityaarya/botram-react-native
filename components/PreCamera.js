import React, { Component } from 'react';
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'

export default class PreCam extends Component {
  render() {
    return (
      <Icon2 name='circle-thin'
        style={{color:'black', fontSize:85, marginBottom: 25}}
        onPress={() => {
        this.props.navigator.push({index:3})
      }}/>
    )
  }
}
