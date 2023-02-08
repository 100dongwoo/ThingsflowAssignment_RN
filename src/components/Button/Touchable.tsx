import React, { ReactChild, ReactChildren } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

interface Type {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  activeOpacity?: number;
}

function Touchable({ children, onPress, activeOpacity, style }: Type) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <View style={style}>{children}</View>
    </TouchableOpacity>
  );
}

export default Touchable;
