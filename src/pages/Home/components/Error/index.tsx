import styled from '@emotion/styled';

export const Empty = () => {
  return <Text>Something went wrong (´・ω・｀)</Text>;
};

const Text = styled.p`
  font-size: 36px;
  text-align: center;
  margin-top: 100px;
  font-weight: 900;
  color: #a5b4c4;
`;
