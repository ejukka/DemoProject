import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

const links = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jukka-edvardsson-4b605b5/',
    description: 'Check out my full profile at Linkedin',
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/ejukka',
    description: 'see my latests tweets',
  },
  {
    title: 'Github',
    link: 'https://github.com/ejukka',
    description: 'see my open source projects',
  },
  {
    title: 'Demo Eshop ',
    link: 'https://edesign-eshop.herokuapp.com/',
    description: 'Heroku hosted demo eshop application ',
  },
  {
    title: 'Wunderdog',
    link: 'https://wunder.dog',
    description: 'People first company for real',
  },
];

const LinkList = () => (
  <View style={styles.container}>
    {links.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => openURLInBrowser(item.link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </View>
);

export default LinkList;
