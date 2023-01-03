import styled from 'styled-components';

export const NavMenu = styled.nav`
  min-height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: #ec4c8a;
  gap: 5rem;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0;
`;

export const Logo = styled.h1`
  color: #fff;
`;

export const BurgerMenu = styled.button`
  background-image: url(${(props) => props.background});
  background-size: contain;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
`;

export const SideMenu = styled.div``;

export const ToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  flex: 1 1 0;
`;

export const Stats = styled.button`
  background-image: url(${(props) => props.background});
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
`;

export const Mic = styled.button`
  background-image: url(${(props) => props.background});
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
`;

export const Search = styled.button`
  background-image: url(${(props) => props.background});
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
`;

export const ActionMenu = styled.div`
  min-height: 8vh;
  width: 100%;
  position: absolute;
  left: ${(props) => (props.activeMenu ? 0 : -100)}%;
  top: 4rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 2rem 0;
`;

export const CloseActionMenu = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: transparent;
  border: none;
  background-image: url(${(props) => props.background});
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: rotate(90deg);
  }
`;

export const StatsWrapper = styled.div``;

export const StatsTitle = styled.h2``;

export const MicWrapper = styled.div``;

export const MicTitle = styled.h2``;

export const SearchTitle = styled.h2``;

export const SearchBar = styled.input``;

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
