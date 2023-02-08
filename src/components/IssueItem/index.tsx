import React from 'react';

import {View, StyleSheet} from 'react-native';
import RowContainer from '../Container/RowContainer';
import {Bold15Label, Normal13Label} from '../Label';
import dayjs from 'dayjs';
import Touchable from '../Button/Touchable';

interface IssueItemType {
  issue: any;
  onPress: (item: any) => void;
}
const IssueItem = ({issue, onPress}: IssueItemType) => {
  return (
    <Touchable onPress={onPress}>
      <RowContainer style={styles.container}>
        <View style={styles.box}>
          <RowContainer>
            <Bold15Label text={`#${issue?.number}`} style={styles.margin} />
            <Bold15Label
              text={`#${issue.title}`}
              numberOfLines={2}
              style={{flex: 1}}
            />
          </RowContainer>
          <RowContainer style={{marginTop: 20}}>
            <Normal13Label text={'작성자 : '} />
            <Normal13Label text={issue?.user?.login} style={styles.margin} />
            <Normal13Label text={'작성일 '} />
            <Normal13Label
              text={dayjs(issue.updated_at).format('YYYY년 MM월 DD일')}
            />
          </RowContainer>
        </View>
        <Normal13Label text={'코멘트 : ' + issue?.comments} />
      </RowContainer>
    </Touchable>
  );
};
const styles = StyleSheet.create({
  margin: {
    marginRight: 20,
  },
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  box: {
    borderColor: '#adadad',
    paddingVertical: 10,
    flex: 1,
  },
});
export default IssueItem;
