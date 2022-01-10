import styled from '@emotion/styled';
import { IssueCreator, IssueState, Label } from '../../../../types/issue';
import { ListCardUser } from '../ListCardUser';
import { ListCardBody } from '../ListCardBody';

type Props = {
  title: string;
  number: number;
  user: IssueCreator;
  body: string;
  labels: Label[];
  comments_url: string;
  state: IssueState;
  comments: number;
};

export const ListCard = ({ user, ...issue }: Props) => {
  return (
    <Container>
      <ListCardUser {...user} />
      <ListCardBody {...issue} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #c1cfd7;
  background-color: #f9f9fc;
  border-radius: 8px;
  padding: 20px;

  &:hover {
    cursor: pointer;
    background-color: #f2f2fa;
  }
`;
