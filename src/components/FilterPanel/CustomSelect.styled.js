import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  flex: 1 1 150px;
  min-width: 120px;

  @media (max-width: 530px) {
    flex: 0;
  }
`;

export const SelectHeader = styled.div`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #88ff88;
  background-color: ${({ $selected }) => ($selected ? '#334466' : '#263750')};
  color: ${({ $selected }) => ($selected ? '#fff' : '#7d848d')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SelectText = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IconArea = styled.span`
  flex: 0 0 22px; // фиксированная ширина для стрелки/крестика
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Arrow = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: ${({ $open }) => ($open ? 'none' : '6px solid #83bf46')};
  border-bottom: ${({ $open }) => ($open ? '6px solid #83bf46' : 'none')};
  transition: transform 0.2s;
`;

export const Cross = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  position: relative;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 2px;
    height: 10px;
    background: #83bf46;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 110%;
  z-index: 10;
  background: #fff;
  border: 1px solid #88ff88;
  border-radius: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${({ $count }) => ($count > 5 ? '180px' : 'none')};
  overflow-y: ${({ $count }) => ($count > 5 ? 'auto' : 'visible')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const OptionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  color: #263750;
  font-weight: ${({ $selected }) => ($selected ? 'bold' : 'normal')};
  &:hover {
    background: #e6f2da;
  }
`;
