import styled from "styled-components";

export const Div = styled.div`
  h1 {
    margin-bottom: 16px;
  }
  h3 {
    margin-bottom: 12px;
  }
  div {
    /* display: flex;
    flex-direction: column;
    gap: 12px; */
    padding-bottom: 24px;
    padding-top: 24px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .welcome-icon {
    height: 40px;
    width: 40px;
  }
`;
