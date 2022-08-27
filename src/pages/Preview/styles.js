import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  >main {
    overflow-y: scroll;
    padding: 64px 0; 

    section {
      margin: 0 0 16px 0;
    }
  }
`;

export const Content = styled.div`
  margin: 0 auto;

  max-width: 80%;

  display: flex;
  flex-direction: column;

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 20px;
  }

  .movie {
    display: flex;
    align-items: center;

    gap: 19px;

    margin-bottom: 24px;
  }

  .movie h1 {
    font-weight: 500;
    font-size: 36px;
  }

  .author {
    display: flex;
    align-items: center;

    gap: 8px;
  }

  .author span {
    margin-right: 8px;
  }

  .author img {
    width: 16px;
    height: 16px;

    border-radius: 50%;
  }
`;