import React, {useContext, useEffect} from 'react';

import {FlatList, View, Image, StyleSheet} from 'react-native';
import IssueItem from '../../components/IssueItem';
import {IssueContext} from '../../contexts/IssueProvider';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;
const MainScreen = ({navigation}: Props) => {
  const issueContext = useContext(IssueContext);

  useEffect(() => {
    if (issueContext?.issues?.length === 0) {
      issueContext?.resetIssue();
      issueContext.fetchIssue();
    }
  }, []);

  const onPressIssue = (item: issueType) => {
    navigation.navigate('DetailIssue', {
      issue: item,
    });
  };

  return (
    <FlatList
      data={issueContext?.issues ?? []}
      renderItem={({item, index}) => (
        <>
          <IssueItem
            issue={item}
            onPress={() => {
              onPressIssue(item);
            }}
          />
          {/*5개 이상일때만..*/}
          {issueContext?.issues &&
            issueContext?.issues.length >= 5 &&
            index === 3 && (
              <Image
                source={{
                  uri: 'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7',
                }}
                style={styles.image}
              />
            )}
        </>
      )}
      keyExtractor={(item, index) => `key${index}`}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      onEndReached={e => {
        issueContext?.fetchIssue(issueContext.page + 1);
        issueContext?.setPage(issueContext.page + 1);
      }}
    />
  );
};
const styles = StyleSheet.create({
  image: {width: '100%', height: 100, marginTop: 30},
});

export default MainScreen;
