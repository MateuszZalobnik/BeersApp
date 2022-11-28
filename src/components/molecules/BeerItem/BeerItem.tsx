import React, { useState } from 'react';
import FavouriteIcon from 'components/atoms/FavouriteIcons/FavouriteIcon';
import NotFavouriteIcon from 'components/atoms/FavouriteIcons/NotFavouriteIcon';
import {
  ContentWrapper,
  FavouriteIconWrapper,
  ImgWrapper,
  InfoWrapper,
  ItemName,
  Wrapper,
} from 'components/molecules/BeerItem/BeerItem.style';
import beerImg from 'assets/img/beer-bottle.svg';

interface BeerItemProps {
  beerData: {
    id: number;
    name: string;
    abv?: number | string;
    ibu?: number | string;
    image_url?: string;
  };
  openModal: (id: number) => void;
}

const BeerItem: React.FC<BeerItemProps> = ({
  beerData: { id, name, abv = 'unknown', ibu = 'unknown', image_url },
  openModal,
}) => {
  const [isFavourite, setIsFavourite] = useState(
    JSON.parse(localStorage.getItem('favouriteBeers') || '').includes(id)
  );

  const handleFavouriteBeer = (id: number) => {
    let favouriteBeers: (string | number)[] = [];

    if (localStorage.getItem('favouriteBeers')) {
      favouriteBeers = [
        ...JSON.parse(localStorage.getItem('favouriteBeers') || ''),
      ];
    }
    if (!favouriteBeers.includes(id)) {
      favouriteBeers.push(id);
      setIsFavourite(true);
    } else if (favouriteBeers.includes(id)) {
      const index = favouriteBeers.indexOf(id);
      favouriteBeers.splice(index, 1);
      setIsFavourite(false);
    }
    localStorage.setItem('favouriteBeers', JSON.stringify(favouriteBeers));
  };
  return (
    <Wrapper>
      <FavouriteIconWrapper onClick={() => handleFavouriteBeer(id)}>
        {isFavourite ? <FavouriteIcon props /> : <NotFavouriteIcon props />}
      </FavouriteIconWrapper>
      <ContentWrapper onClick={() => openModal(id)}>
        <ImgWrapper>
          <img
            src={image_url ? image_url : beerImg}
            alt={name + ' beer photo'}
          />
        </ImgWrapper>

        <InfoWrapper>
          <div>{abv}% volume</div>
          <div>{ibu}% bitterness</div>
        </InfoWrapper>
        <ItemName>
          {name.length > 15 ? name.substr(0, 12) + '...' : name}
        </ItemName>
      </ContentWrapper>
    </Wrapper>
  );
};
export default BeerItem;
