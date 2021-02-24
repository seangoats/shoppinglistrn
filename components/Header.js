import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4f13bf',
    height: 60,
  },
  text: {
    textAlign: 'center',
    paddingTop: 16,
    fontSize: 22,
    color: '#eee',
    fontWeight: 'bold',
  },
});

export default Header;
