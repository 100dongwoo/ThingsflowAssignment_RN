import React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';

interface Type {
  children?: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  onPress?: (item?: any) => void;
  activeOpacity?: number;
}

function Touchable({children, onPress, activeOpacity, style}: Type) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <View style={style}>{children}</View>
    </TouchableOpacity>
  );
}

export default Touchable;
