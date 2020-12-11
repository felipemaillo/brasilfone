import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 32px;
  background: #006400;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 700;
  transition: background-color 0.2s;
  color: #fff;
  font-size: 25px;

  &:hover {
    background: ${shade(0.2, '#006400')};
  }
`;
