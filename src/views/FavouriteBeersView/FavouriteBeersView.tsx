import React, { useState, useEffect } from 'react';
import BeerItem from 'components/molecules/BeerItem/BeerItem';
import axios from 'axios';
import {
  LoadingInfo,
  Wrapper,
} from 'views/FavouriteBeersView/FavouriteBeersView.style';

const API_URL = 'https://api.punkapi.com/v2/beers?';

const beersAPI = axios.create({});

const FavouriteBeersView: React.FC<{ openModal: (id: number) => void }> = ({
  openModal,
}) => {
  const [favouriteBeers, setFavouriteBeers] = useState([]);
  const [information, setInformation] = useState('Loading...');

  useEffect(() => {
    const beersId = JSON.parse(localStorage.getItem('favouriteBeers') || '');
    let ids = '';
    beersId.forEach((element: number) => {
      ids = ids + element.toString() + '|';
    });
    if (beersId.length > 0) {
      beersAPI
        .get(API_URL + `ids=${ids}`)
        .then(function ({ data }) {
          // handle sucess
          setFavouriteBeers(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setInformation('server error');
        });
    } else {
      setFavouriteBeers([]);
      setInformation('Favourite beers not found.');
    }
  }, []);

  return (
    <Wrapper>
      {favouriteBeers.length ? (
        favouriteBeers.map((beerData: { id: number; name: string }) => (
          <BeerItem
            key={beerData.id}
            beerData={beerData}
            openModal={openModal}
          />
        ))
      ) : (
        <LoadingInfo>{information}</LoadingInfo>
      )}
    </Wrapper>
  );
};

export default FavouriteBeersView;
