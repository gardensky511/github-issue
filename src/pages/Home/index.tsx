import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { InputField } from './components/InputField';
import { useEffect } from 'react';
import { fetchIssueList } from '../../redux/issue/thunk';
import { fetchRepositoryData } from '../../redux/repository/thunk';
import { INITIAL_INPUT_VALUES } from './const';
import { IssueList } from './components/IssueList';
import { issueListSelector, issueSelector } from '../../redux/issue/selectors';
import { repositorySelector } from '../../redux/repository/selectors';

export const Home = () => {
  const dispatch = useAppDispatch();
  const issueList = useAppSelector(issueListSelector);
  const { fullName, openIssuesCount } = useAppSelector(repositorySelector);
  const { owner, repository, currenPageNumber } = useAppSelector(issueSelector);

  useEffect(() => {
    dispatch(fetchIssueList({ owner, repository, page: currenPageNumber }));
    dispatch(fetchRepositoryData({ owner, repository }));
  }, [owner, repository, currenPageNumber, dispatch]);

  return (
    <Container>
      <Title>🔍 Let&apos;s Search Issues 🔍</Title>
      <InputField />
      <IssueList openIssuesCount={openIssuesCount} fullName={fullName} issueList={issueList} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 30px;
`;
