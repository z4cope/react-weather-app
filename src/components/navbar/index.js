import { useState } from 'react';
import { useLocation, Outlet, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLocations } from '../../features/locations/locationSLice';

import {
  NavMenu,
  NavWrapper,
  Logo,
  BurgerMenu,
  BurgerSideMenu,
  ExitSideMenu,
  BackButton,
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
  SubmitSearch,
} from './styles/header';

const Navbar = () => {
  const dispatch = useDispatch();
  const [actionMenu, setActionMenu] = useState('');
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSideMenu, setActiveSideMenu] = useState(false);
  const [locationSearch, setLocationSearch] = useState('London');
  const actionMenuHandle = (e) => {
    setActionMenu(e.target.id);
    setActiveMenu(activeMenu ? true : !activeMenu);
  };

  const pageLocation = useLocation().pathname;

  const searchHandler = (e) => {
    setLocationSearch(e.target.value);
  };

  const searchResult = (e) => {
    e.preventDefault();
    dispatch(getLocations(locationSearch));
    setLocationSearch('');
  };

  return (
    <>
      <NavMenu>
        <NavWrapper>
          {pageLocation !== '/' ? (
            <Link to="/">
              <BackButton background="./assets/back-button.png" />
            </Link>
          ) : (
            <BurgerMenu
              onClick={() => setActiveSideMenu(!activeSideMenu)}
              background="./assets/menu.png"
            />
          )}
          <BurgerSideMenu activeSideMenu={activeSideMenu}>
            {' '}
            <ExitSideMenu
              onClick={() => setActiveSideMenu(!activeSideMenu)}
              background="./assets/close.png"
            />{' '}
            Nothing in here yet!
          </BurgerSideMenu>

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
                <SearchContainer onSubmit={(e) => searchResult(e)}>
                  {' '}
                  <SearchTitle>Search Country</SearchTitle>
                  <SearchBar
                    value={locationSearch}
                    onChange={(e) => searchHandler(e)}
                    placeholder="ex. London"
                  />
                  <SubmitSearch background="./assets/right.png" type="submit" />
                </SearchContainer>
              ),
            }[actionMenu]
          }
        </ActionMenu>
      </NavMenu>
      <Outlet />
    </>
  );
};

export default Navbar;
