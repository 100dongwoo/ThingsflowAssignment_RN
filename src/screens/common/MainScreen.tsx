import React, {useState} from 'react';

import {FlatList, Alert, Text, View, Image, StyleSheet} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import IssueItem from '../../components/IssueItem';

const MainScreen = () => {
  const [page, setPage] = useState([]);

  const {response, error}: {response: []; error: object} = useFetch(
    'https://api.github.com/repos/angular/angular-cli/issues',
    {sort: 'comments', per_page: 20, page: 1, state: 'open'},
  );

  const onPressIssue = (item: any) => {
    console.log(item);
  };

  return (
    <FlatList
      data={response ?? []}
      renderItem={({item, index}) => (
        <>
          <IssueItem issue={item} onPress={onPressIssue} />
          {response.length > 5 && index === 3 && (
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
    />
  );
};
const styles = StyleSheet.create({
  image: {width: '100%', height: 100, marginTop: 30},
});

export default MainScreen;
