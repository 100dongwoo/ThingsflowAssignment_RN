import React, {useContext, useEffect} from 'react';

import {
  FlatList,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Linking,
} from 'react-native';
import IssueItem from '../../components/IssueItem';
import {IssueContext} from '../../contexts/IssueProvider';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Bold15Label} from '../../components/Label';
import Touchable from '../../components/Button/Touchable';

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
    <>
      {issueContext?.isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#00ff00" />
          <Bold15Label text={'로딩중...'} />
        </View>
      )}
      <FlatList
        style={{opacity: issueContext?.isLoading ? 0.3 : 1}}
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
                <Touchable
                  onPress={() => {
                    Linking.openURL('https://thingsflow.com/ko/home');
                  }}>
                  <Image
                    source={{
                      uri: 'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7',
                    }}
                    style={styles.image}
                  />
                </Touchable>
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
    </>
  );
};
const styles = StyleSheet.create({
  image: {width: '100%', height: 100, marginTop: 30},
  loading: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -100}],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
