import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

border: none;
border-radius: 10px;

padding: 22px;
margin-bottom: 16px;

> h1 {
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  color: #F4EDE8;
}

>svg {
  display: flex;
}

>p {
  margin-top: 10px;
  text-align: left;
  color: #999591;

  margin-bottom: 50px;
}

> footer {
  width: 100%;
  display: flex;
  margin-top: 24px;
  
}
`;