import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 950px;

  @media (max-width: 530px) {
    gap: 10;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Input = styled.input`
  flex: 1 1 150px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #88ff88;
  background-color: #263750;
  color: #fff;
  font-size: 16px;
  width: 185px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: #7d848d;
  }

  &:focus {
    outline: none;
    background-color: #334466;
    border-color: #88ff88;
    box-shadow: 0 0 0 2px rgba(136, 255, 136, 0.2);
  }

  @media (max-width: 530px) {
    flex: 0;
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  width: 186px;

  @media (max-width: 530px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ApplyButton = styled.button`
  flex: 1;
  padding: 8px 12px;
  background-color: transparent;
  color: #83bf46;
  border: 1px solid #83bf46;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #83bf46;
  }
`;

export const ResetButton = styled.button`
  flex: 1;
  padding: 8px 12px;
  background-color: transparent;
  color: #cc0000;
  border: 1px solid #cc0000;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
    color: white;
  }
`;
