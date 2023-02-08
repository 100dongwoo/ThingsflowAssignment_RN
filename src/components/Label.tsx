import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';

interface LabelProps extends TextProps {
  text: string | number;
  style?: StyleProp<TextStyle>;
}
export function Bold15Label({style, text, ...props}: LabelProps) {
  return (
    <Text style={[styles.bold, styles.size15, style]} {...props}>
      {text}
    </Text>
  );
}
export function Normal15Label({style, text, ...props}: LabelProps) {
  return (
    <Text style={[styles.size15, style]} {...props}>
      {text}
    </Text>
  );
}
export function Normal13Label({style, text, ...props}: LabelProps) {
  return (
    <Text style={[styles.size13, style]} {...props}>
      {text}
    </Text>
  );
}
const styles = StyleSheet.create({
  bold: {fontWeight: '600'},
  size15: {fontSize: 15, lineHeight: 23},
  size13: {fontSize: 13, lineHeight: 20},
});
