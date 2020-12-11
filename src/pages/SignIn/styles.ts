import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  place-content: center;
  width: 100%;
  max-width: 700px;
  margin-left: 100px;

  img {
    height: 50px;
    width: 50px;
    margin-bottom: 30px;
  }

  h1 {
    margin-bottom: 15px;
    color: #3D6727;
    font-weight: 700;
    font-size: 35px;
  }

  text {
    color: #908F94;
    font-weight: 700;
  }

  form {
    margin: 80px 0;
    width: 500px;
    /* text-align: center; */
    align-items: center;

    h1 {
      margin-bottom: 24px;
      color: #3D6727;
    }
    
    p {
      color: #2D2E2B;
      margin-bottom: 5px;
    }

    > p {
      margin-top: 20px;
    }

    > input {
      margin-top: 24px;
      font-weight: 300;
      color: #dfdfdf;
      margin-right: 6px;
      border-radius: 5px;
    }

    a {
      color: #3D6727;
      text-decoration: none;
      transition: color 0.2s;
      font-weight: 700;
      float: right;
      margin-top: 24px;

      &:hover {
        color: ${shade(0.2, '#3D6727')};
      }
    }
  }

  > div {
    margin: 80px 0;
    width: 500px;
    text-align: center;
    align-items: center;

    strong {
      margin-top: 50px;
      font-weight: 700;
      color: #2C2E29;
    }

    > strong a {
      color: #3D6727;
      margin-left: 10px;
      text-decoration: none;
      transition: color 0.2s;
      align-items: center;
      font-weight: 700;

      &:hover {
        color: ${shade(0.2, '#3D6727')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
