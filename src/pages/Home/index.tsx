import styled from '@emotion/styled';
import { useAppSelector } from '../../redux/store';
import { InputField } from './components/InputField';
import { ListCard } from './components/ListCard';

export const Home = () => {
  const { issueList } = useAppSelector((state) => state.issue);

  return (
    <Container>
      <Title>🔍 Let&apos;s Search Issues 🔍</Title>
      <InputField />
      {issueList.map((issue) => (
        <ListCard key={issue.id} {...issue} />
      ))}
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
