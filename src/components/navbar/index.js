import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../features/locations/locationSLice';

import {
  NavMenu,
  NavWrapper,
  Logo,
  BurgerMenu,
  ToolBar,
  Stats,
  Mic,
  Search,
  ActionMenu,
  CloseActionMenu,
  SearchContainer,
  StatsWrapper,
  StatsTitle,
  MicWrapper,
  MicTitle,
  SearchTitle,
  SearchBar,
} from './styles/header';

const Navbar = () => {
  const dispatch = useDispatch();
  const [actionMenu, setActionMenu] = useState('');
  const [activeMenu, setActiveMenu] = useState(false);
  const actionMenuHandle = (e) => {
    setActionMenu(e.target.id);
    setActiveMenu(activeMenu ? true : !activeMenu);
  };
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);
  const locations = useSelector((state) => state.locations.locationsArr);
  return (
    <NavMenu>
      <NavWrapper>
        <BurgerMenu background="./assets/menu.png" />
        <Logo>Weather App</Logo>
      </NavWrapper>
      <ToolBar>
        <Stats
          onClick={(e) => actionMenuHandle(e)}
          id="stats"
          background="./assets/phone.png"
        />
        <Mic
          onClick={(e) => actionMenuHandle(e)}
          id="mic"
          background="./assets/mic.png"
        />
        <Search
          onClick={(e) => actionMenuHandle(e)}
          id="search"
          background="./assets/search.png"
        />
      </ToolBar>
      <ActionMenu activeMenu={activeMenu}>
        <CloseActionMenu
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
          background="./assets/close.png"
        ></CloseActionMenu>
        {
          {
            stats: (
              <StatsWrapper>
                {' '}
                <StatsTitle>Stats</StatsTitle>{' '}
              </StatsWrapper>
            ),
            mic: (
              <MicWrapper>
                {' '}
                <MicTitle>Coming Soon</MicTitle>{' '}
              </MicWrapper>
            ),
            search: (
              <SearchContainer>
                {' '}
                <SearchTitle>Search Country</SearchTitle>
                <SearchBar placeholder="ex. London" />
              </SearchContainer>
            ),
          }[actionMenu]
        }
      </ActionMenu>
    </NavMenu>
  );
};

export default Navbar;
