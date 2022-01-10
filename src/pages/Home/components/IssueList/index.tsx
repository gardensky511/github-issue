import { ListCard } from '../ListCard';
import { Pagination } from '../Pagination';
import styled from '@emotion/styled';
import { Issue } from '../../../../types/issue';
import { Empty } from '../Error';
import { Fragment } from 'react';

type Props = {
  openIssuesCount: number;
  fullName: string;
  issueList: Issue[];
  handlePageNumberClick: (pageNumber: number) => void;
};

export const IssueList = ({ openIssuesCount, fullName, issueList, handlePageNumberClick }: Props) => {
  if (issueList.length === 0) return <Empty />;

  return (
    <Fragment>
      <ResultNotice>
        <Strong>{openIssuesCount}</Strong> open issues for <Strong>{fullName}</Strong>
      </ResultNotice>
      {issueList.map(({ id, ...issue }) => (
        <ListCard key={id} {...issue} />
      ))}
      <Pagination openIssuesCount={openIssuesCount} handlePageNumberClick={handlePageNumberClick} />
    </Fragment>
  );
};

const ResultNotice = styled.p`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Strong = styled.span`
  font-weight: 600;
`;
