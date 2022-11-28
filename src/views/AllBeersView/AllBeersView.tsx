import React from 'react';
import BeerItem from 'components/molecules/BeerItem/BeerItem';
import { LoadingInfo, Wrapper } from 'views/AllBeersView/AllBeersView.style';

interface AllBeersProps {
  openModal: (id: number) => void;
  beers: { id: number; name: string }[];
}

const AllBeersView: React.FC<AllBeersProps> = ({ openModal, beers }) => {
  return (
    <Wrapper>
      {beers.length ? (
        beers.map((beerData) => (
          <BeerItem
            key={beerData.id}
            beerData={beerData}
            openModal={openModal}
          />
        ))
      ) : (
        <LoadingInfo>Loading...</LoadingInfo>
      )}
    </Wrapper>
  );
};

export default AllBeersView;
