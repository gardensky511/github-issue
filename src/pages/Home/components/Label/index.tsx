import styled from '@emotion/styled';
import { Label as LabelType } from '../../../../types/issue';

type Props = Omit<LabelType, 'id'>;

export const Label = ({ color, name }: Props) => <Container color={color}>{name}</Container>;

const Container = styled.div<{ color: string }>`
  background-color: #${({ color }) => color};
  display: flex;
  padding: 3px 6px;
  border-radius: 2px;
`;
