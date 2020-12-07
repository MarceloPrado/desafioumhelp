import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 70px;
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
  input {
    width: 80px;
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    &:focus {
      border: 1px solid greenyellow;
    }
  }
  button {
    margin-top: 5px;
    border: 5px;
    height: 43px;
    width: 60px;
    background: rgb(17, 133, 88);
    color: #ffff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Home = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
`;
