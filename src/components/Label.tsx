import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import styled from 'styled-components/native';

interface LabelProps extends TextProps {
  text: string | number;
  style?: StyleProp<TextStyle>;
}

export function Bold15Label({style, text, ...props}: LabelProps) {
  return (
    <Bold15 style={style} {...props}>
      {text}
    </Bold15>
  );
}
export function Normal15Label({style, text, ...props}: LabelProps) {
  return (
    <Normal15 style={style} {...props}>
      {text}
    </Normal15>
  );
}
export function Normal13Label({style, text, ...props}: LabelProps) {
  return (
    <Normal13 style={style} {...props}>
      {text}
    </Normal13>
  );
}
const Normal15 = styled(Text)`
  font-size: 15px;
  line-height: 23px;
`;
const Normal13 = styled(Text)`
  font-size: 13px;
  line-height: 20px;
`;
const Bold15 = styled(Normal15)`
  font-weight: 600;
`;
