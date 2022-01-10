import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { InputField } from './components/InputField';
import { ListCard } from './components/ListCard';
import { Pagination } from './components/Pagination';
import { useEffect } from 'react';
import { fetchIssueList } from '../../redux/issue/thunk';
import { fetchRepositoryData } from '../../redux/repository/thunk';
import { INITIAL_INPUT_VALUES } from './const';

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
      <ResultNotice>
        <Strong>{openIssuesCount}</Strong> open issues for <Strong>{fullName}</Strong>
      </ResultNotice>
      {issueList.map((issue) => (
        <ListCard key={issue.id} {...issue} />
      ))}
      <Pagination openIssuesCount={openIssuesCount} />
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

const ResultNotice = styled.p`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Strong = styled.span`
  font-weight: 600;
`;
