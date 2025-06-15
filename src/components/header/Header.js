import styled from 'styled-components';
import { Logo } from './Logo';
import { FilterPanel } from '../FilterPanel/FilterPanel';

export function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <FilterWrapper>
        <FilterPanel />
      </FilterWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 0;
  }

  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  max-width: 300px;
`;

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  @media (min-width: 950px) {
    justify-content: flex-end;
    max-width: 800px;
  }

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
