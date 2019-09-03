import {ImageBackground, StyleSheet, Text} from 'react-native';
import React from 'react';
import styles from './header.styles';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={require('./oma_wunder_kuva.png')}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Curriculum vitae</Text>
  </ImageBackground>
);

export default Header;
