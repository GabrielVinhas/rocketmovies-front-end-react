import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
width: 100%;
height: 100vh;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  padding: 0 64px;
  overflow-y: auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 30px;

    h2 {
      width: 250px;
    }

    .new {
      width: fit-content;
    }
  }
`;