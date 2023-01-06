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

export const BurgerSideMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 50%;
  background: #fff;
  left: ${(props) => (props.activeSideMenu ? 0 : -100)}%;
  top: 0;
  z-index: 10;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
`;

export const ExitSideMenu = styled.button`
  background-image: url(${(props) => props.background});
  background-size: contain;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: all 0.3s ease;
  &:hover {
    transform: rotate(90deg);
  }
`;

export const BackButton = styled.button`
  background-image: url(${(props) => props.background});
  background-size: contain;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  filter: brightness(0) invert(1);
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
  padding: 2rem 1rem;
  background-color: #fff;
  z-index: 5;
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

export const StatsTitle = styled.h2`
  color: #000;
`;

export const MicWrapper = styled.div``;

export const MicTitle = styled.h2`
  color: #000;
`;

export const SearchTitle = styled.h2`
  color: #000;
`;

export const SearchBar = styled.input`
  width: 40%;
  padding: 0.5rem 1rem;
`;

export const SubmitSearch = styled.button`
  background-image: url(${(props) => props.background});
  width: 1.5rem;
  height: 1.5rem;
  background-size: contain;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(0.3rem);
  }
`;

export const SearchContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
