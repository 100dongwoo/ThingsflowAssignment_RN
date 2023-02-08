import React, {ReactChild, ReactChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface Type {
  children?: JSX.Element | JSX.Element[];
  style?: ViewStyle;
}

export function RowContainer({children, style}: Type) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', ...style}}>
      {children}
    </View>
  );
}

export default RowContainer;
