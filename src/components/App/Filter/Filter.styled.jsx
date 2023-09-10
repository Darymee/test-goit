import styled from 'styled-components';

export const FilterTool = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;

  & span {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    color: #373737;
  }
`;

export const FilterButton = styled.button`
  cursor: pointer;

  padding: 8px 18px;

  border: none;
  border-radius: 10.3108px;
  background-color: ${p => (p.checked ? '#5CD3A8' : '#ebd8ff')};
  color: #ffffff;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.22;

  text-transform: uppercase;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: transform 500ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;
