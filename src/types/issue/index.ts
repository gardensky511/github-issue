export type IssueCreator = {
  login: string;
  avatar_url: string;
};

export type Label = {
  id: number;
  name: string;
  color: string;
};

export type IssueState = 'open' | 'closed';

export type Issue = {
  id: number;
  title: string;
  number: number;
  user: IssueCreator;
  body: string;
  labels: Label[];
  comments_url: string;
  state: IssueState;
  comments: number;
};

export type GetIssueListParam = {
  owner: string;
  repository: string;
};
