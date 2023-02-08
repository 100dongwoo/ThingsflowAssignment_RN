import React, {createContext, useContext, useState} from 'react';

import {Alert, Text, View} from 'react-native';
import axios from 'axios';

type ContextType = null | {
  issues: issueType[];
  fetchIssue: (value?: number) => void;
  page: number;
  setPage: (data: number) => void;
  resetIssue: () => void;
  isLoading: boolean;
  headerTitle: string;
};

export const IssueContext = createContext<ContextType>(null);

const IssueProvider = ({children}: {children: JSX.Element}) => {
  const [issues, setIssues] = useState<issueType[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Angular-cli/issues');

  const resetIssue = () => {
    setPage(1);
    setIssues([]);
  };

  const fetchIssue = async (value = 1) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        'https://api.github.com/repos/angular/angular-cli/issues',
        {
          params: {sort: 'comments', per_page: 10, page: value, state: 'open'},
        },
      );
      console.log('api 호출', issues, res.data);
      setIssues(issues.concat(res?.data));
    } catch (e) {
      Alert.alert('API호출 에러');
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IssueContext.Provider
      value={{
        issues,
        fetchIssue,
        page,
        setPage,
        resetIssue,
        isLoading,
        headerTitle,
      }}>
      {children}
    </IssueContext.Provider>
  );
};

export default IssueProvider;
