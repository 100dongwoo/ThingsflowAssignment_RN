import React from 'react';

import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RowContainer from '../../components/Container/RowContainer';
import {Bold15Label, Normal13Label} from '../../components/Label';
import dayjs from 'dayjs';

type Props = NativeStackScreenProps<RootStackParamList>;

const DetailIssueScreen = ({route}: Props) => {
  const {issue} = route?.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 40}}>
      <RowContainer style={styles.spaceBetween}>
        <Image source={{uri: issue?.user?.avatar_url}} style={styles.avatar} />
        <RowContainer style={styles.topBox}>
          <View style={{flex: 1}}>
            <RowContainer>
              <Bold15Label
                text={`#${issue?.number}`}
                style={styles.defaultMarginRight}
              />
              <Bold15Label
                text={`#${issue?.title}`}
                numberOfLines={1}
                style={{flex: 1}}
              />
            </RowContainer>
            <RowContainer style={{marginTop: 5}}>
              <Normal13Label text={'작성자 : '} />
              <Normal13Label
                text={issue?.user?.login}
                style={styles.defaultMarginRight}
              />
            </RowContainer>
            <RowContainer style={{marginTop: 5}}>
              <Normal13Label text={'작성일 '} />
              <Normal13Label
                text={dayjs(issue?.updated_at).format('YYYY년 MM월 DD일')}
              />
            </RowContainer>
          </View>
          <Normal13Label
            text={'코멘트 : ' + issue?.comments}
            style={styles.defaultMarginLeft}
          />
        </RowContainer>
      </RowContainer>
      <Normal13Label text={issue?.body} style={styles.body} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  spaceBetween: {flex: 1, justifyContent: 'space-between'},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#adadad',
  },
  defaultMarginRight: {
    marginRight: 5,
  },
  defaultMarginLeft: {
    marginLeft: 5,
  },
  topBox: {
    marginLeft: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    flex: 1,
  },
  body: {
    marginTop: 40,
  },
});
export default DetailIssueScreen;
