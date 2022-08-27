import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  'header'
  'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    margin: 0 auto;

    width: 80%;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin: 38px 78px;
    }
  }

  .placeholders {
    display: flex;
    gap: 40px;
  }

  .textarea {
      min-height: 274px;
    }

  .tags {
    display: flex;
    background-color: #0D0C0F;
    width: 100%;
  }

  .buttons {
    display: flex;
    gap: 40px;

    .delete-button {
      background-color: #0D0C0F;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  
`;

export const Form = styled.form`
  margin: 38px 78px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;