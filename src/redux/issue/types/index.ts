import { Issue } from '../../../types/issue';

export type IssueState = {
  owner: string;
  repository: string;
  issueList: Issue[];
  currenPageNumber: number;
};
