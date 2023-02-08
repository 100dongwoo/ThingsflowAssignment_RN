import React, {createContext, useContext, useState} from 'react';

import {Alert, Text, View} from 'react-native';
import axios from 'axios';

type ContextType = null | {
  issues: issueType[];
  fetchIssue: (value?: number) => void;
  page: number;
  setPage: (data: number) => void;
  resetIssue: () => void;
};

export const IssueContext = createContext<ContextType>(null);

const IssueProvider = ({children}: {children: JSX.Element}) => {
  const [issues, setIssues] = useState<issueType[]>([]);
  const [page, setPage] = useState(1);

  const resetIssue = () => {
    setPage(1);
    setIssues([]);
  };

  const fetchIssue = async (value = 1) => {
    try {
      const res = await axios.get(
        'https://api.github.com/repos/angular/angular-cli/issues',
        {
          params: {sort: 'comments', per_page: 10, page: value, state: 'open'},
        },
      );
      console.log(res.data);
      setIssues(issues.concat(res?.data));
    } catch (e) {
      Alert.alert('API호출 에러');
      console.log(e);
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
      }}>
      {children}
    </IssueContext.Provider>
  );
};

export default IssueProvider;
