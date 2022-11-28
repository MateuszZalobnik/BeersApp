import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import { theme } from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import AllBeersView from 'views/AllBeersView/AllBeersView';
import { Switch, Route } from 'react-router-dom';
import FavouriteBeersView from 'views/FavouriteBeersView/FavouriteBeersView';
import Navigation from './components/molecules/Navigation/Navigation';
import DetailsWrapper from 'components/organisms/DetailsWrapper/DetailsWrapper';
import useDetailsWrapperModal from './hooks/useDetailsWrapperModal/useDetailsWrapperModal';
import { useBeers } from './hooks/useBeers/useBeers';

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  margin: 0;
  padding: 0;
`;

const App: React.FC = () => {
  const { modalIsOpen, openModal, closeModal, beerDetails } =
    useDetailsWrapperModal();
  const { beers, beersFilter, getBeersByPage, currentPage } = useBeers();

  if (!localStorage.getItem('favouriteBeers')) {
    const initialState: string[] = [];
    localStorage.setItem('favouriteBeers', JSON.stringify(initialState));
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Navigation
          beersFilter={beersFilter}
          getBeersByPage={getBeersByPage}
          currentPage={currentPage}
          modalIsOpen={modalIsOpen}
        />
        <Switch>
          <Route exact path="/">
            <AllBeersView openModal={openModal} beers={beers} />
          </Route>
          <Route path="/favourite">
            <FavouriteBeersView openModal={openModal} />
          </Route>
        </Switch>
        <DetailsWrapper
          beerDetails={beerDetails}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
