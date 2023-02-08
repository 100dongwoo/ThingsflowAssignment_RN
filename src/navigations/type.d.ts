type RootStackParamList = {
  Main: undefined;
  DetailIssue: {issue: issueType};
};

type issueType = {
  url?: string | null;
  repository_url?: string | null;
  labels_url?: string | null;
  comments_url?: string | null;
  events_url?: string | null;
  html_url?: string | null;
  id?: number;
  node_id?: string | null;
  number?: number | null;
  title?: string | null;
  user?: any | null;
  labels?: any | null;
  state?: string | null;
  locked?: boolean | null;
  assignee?: string | null;
  assignees?: any | null;
  milestone?: any | null;
  comments?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  closed_at?: string | null;
  author_association?: string | null;
  active_lock_reason?: string | null;
  body?: string | null;
  reactions?: any | null;
  timeline_url?: string | null;
  performed_via_github_app?: string | null;
  state_reason?: string | null;
};
