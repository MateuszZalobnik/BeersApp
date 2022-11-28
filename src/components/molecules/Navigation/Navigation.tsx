import React, { useState } from 'react';
import { Nav, StyledLink, PagesWrapper } from './Navigation.style';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import FavouriteMenuIcon from 'components/atoms/FavouriteIcons/FavouriteMenuIcon';

interface NavProps {
  getBeersByPage: (page: string) => void;
  currentPage: string;
  modalIsOpen: boolean;
  beersFilter: (SearchPhrase: string) => void;
}

const Navigation: React.FC<NavProps> = ({
  beersFilter,
  getBeersByPage,
  currentPage,
  modalIsOpen,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Nav modalIsOpen={modalIsOpen}>
      <ul>
        <li>
          <StyledLink
            onClick={() => {
              setIsVisible(true);
            }}
            to="/"
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            onClick={() => {
              setIsVisible(false);
            }}
            to="/favourite"
          >
            Your
            <FavouriteMenuIcon props />
            List
          </StyledLink>
        </li>
      </ul>
      {isVisible ? <SearchBar beersFilter={beersFilter} /> : null}
      {isVisible ? (
        <PagesWrapper>
          <ul>
            <li
              className={currentPage === '1' ? 'active' : ''}
              onClick={() => {
                getBeersByPage('1');
              }}
            >
              1
            </li>
            <li
              className={currentPage === '2' ? 'active' : ''}
              onClick={() => {
                getBeersByPage('2');
              }}
            >
              2
            </li>
            <li
              className={currentPage === '3' ? 'active' : ''}
              onClick={() => {
                getBeersByPage('3');
              }}
            >
              3
            </li>
            <li
              className={currentPage === '4' ? 'active' : ''}
              onClick={() => {
                getBeersByPage('4');
              }}
            >
              4
            </li>
            <li
              className={currentPage === '5' ? 'active' : ''}
              onClick={() => {
                getBeersByPage('5');
              }}
            >
              5
            </li>
          </ul>
        </PagesWrapper>
      ) : null}
    </Nav>
  );
};

export default Navigation;
