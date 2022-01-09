import styled from '@emotion/styled';
import { InputField } from './components/InputField';

export const Home = () => {
  // todo: コンポーネントに分離
  // todo: イベントハンドラー実装
  return (
    <Container>
      <Title>🔍 Let&apos;s Search Issues 🔍</Title>
      <InputField />
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

