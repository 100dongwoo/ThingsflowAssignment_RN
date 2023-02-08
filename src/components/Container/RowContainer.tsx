import React, {ReactChild, ReactChildren} from 'react';
import {StyleProp, View, ViewPropTypes, ViewStyle} from 'react-native';

interface Type {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
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
