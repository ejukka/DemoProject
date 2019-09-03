/**
 * Demo React Native App
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Header from './src/components/header/header.component';
import Links from './src/components/links/links.component';
import styles from './App.styles';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Who am I </Text>
              <Text style={styles.sectionDescription}>
                My name is{' '}
                <Text style={styles.highlight}>Jukka Edvardsson</Text> I am
                software professional from Wunderdog
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.sectionDescription}>
                Master degree in Information technology at Lappeenranta
                University of Technology.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Programming Languages</Text>
              <Text style={styles.sectionDescription}>
                Scala, Java, JavaScript, TypeScript, C#, GO
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>What I read at the moment</Text>
              <Text style={styles.sectionDescription}>
                Mike Tyson - Undisputed Truth
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More about me</Text>
              <Text style={styles.sectionDescription}>
                Read the following links to discover what to do next:
              </Text>
            </View>
            <Links />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
