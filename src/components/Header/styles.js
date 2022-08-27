import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
 grid-area: header;

 height: 105px;
 width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme. COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 0 80px;

  >h3 {
    font-size: 24px;
    color: ${({ theme }) => theme. COLORS.PINK};
  }

`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  width: 30%;

  

  >img {
    width: 56px;
    height: 56px;
    
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    margin-left: 16px;

    line-height: 24px;
    align-items: flex-end;

    margin-right: 9px;


    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

  }
`;