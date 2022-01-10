import styled from '@emotion/styled';

type Props = {
  name: string;
  color: string;
};

export const IssueLabel = ({ color, name }: Props) => <Container color={color}>{name}</Container>;

const Container = styled.div<{ color: string }>`
  background-color: #${({ color }) => color};
  display: flex;
  padding: 3px 6px;
  border-radius: 2px;
`;
