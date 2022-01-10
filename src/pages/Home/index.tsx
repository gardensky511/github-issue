import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { InputField } from './components/InputField';
import { useEffect } from 'react';
import { fetchIssueList } from '../../redux/issue/thunk';
import { fetchRepositoryData } from '../../redux/repository/thunk';
import { INITIAL_INPUT_VALUES } from './const';
import { IssueList } from './components/IssueList';

export const Home = () => {
  const dispatch = useAppDispatch();
  // todo: selector 整理
  const { issueList } = useAppSelector((state) => state.issue);
  const { fullName, openIssuesCount } = useAppSelector((state) => state.repository);
  const { owner, repository, currenPageNumber } = useAppSelector((state) => state.issue);
  const initialInputValues = { owner: INITIAL_INPUT_VALUES.OWNER, repository: INITIAL_INPUT_VALUES.REPOSITORY };

  useEffect(() => {
    dispatch(fetchIssueList({ ...initialInputValues, page: currenPageNumber }));
    dispatch(fetchRepositoryData(initialInputValues));
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
