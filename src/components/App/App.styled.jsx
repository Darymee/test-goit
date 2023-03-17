import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  margin: 50px auto;
`;

export const CardList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  gap: 30px;
`;
