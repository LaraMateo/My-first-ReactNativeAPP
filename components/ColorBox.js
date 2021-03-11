import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ColorBox = ({item}) => {
  const colorStyle = {
    backgroundColor: item.hexCode,
    color:
      parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return <Text style={[styles.box, colorStyle]}>{item.colorName}</Text>;
};
const styles = StyleSheet.create({
  box: {
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 5,
    textAlignVertical: 'center',
    width: '90%',
    height: 40,
    borderRadius: 5,
  },
});

export default ColorBox;
