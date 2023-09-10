import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  margin: 50px auto;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #471ca9;
  text-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
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

export const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;
