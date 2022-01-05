import styled from '@emotion/styled';
import { Button, Input } from '@chakra-ui/react';

export const Home = () => {
  // todo: コンポーネントに分離
  // todo: イベントハンドラー実装
  return (
    <Container>
      <Title>🔍 Let&apos;s Search Issues 🔍</Title>
      <SearchArea>
        <Input placeholder="Enter the github ID (e.g facebook)" size="lg" />
        <Slash />
        <Input placeholder="Repository name, too (e.g react)" size="lg" />
        <Button ml="10px" size="lg">
          検索
        </Button>
      </SearchArea>
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

const SearchArea = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Slash = styled.div`
  width: 10px;
  background-color: #a0afb8;
  margin: 5px 10px;
  transform: rotate(10deg);
`;
