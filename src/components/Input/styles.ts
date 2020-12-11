import styled, { css } from 'styled-components';
import { shade } from 'polished';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid #D6D5DA;
  color: #D6D5DA;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #3D6727;
      color: #908F94;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border: 2px solid #3D6727;
      color: #908F94;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #908F94;

    &::placeholder {
      color: #D6D5DA;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #f4ede8;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
