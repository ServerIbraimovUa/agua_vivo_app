import styled from "styled-components";

export const ListStyle = styled.ul`
  list-style: none;
  li {
    display: flex;
    position: relative;
    &::before {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #407bff;
    }
  }
`;
