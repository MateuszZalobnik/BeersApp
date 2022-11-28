import React from 'react';
import Modal from 'react-modal';
import {
  BeerInfo,
  BeerName,
  IngredientsWrapper,
  StyledButton,
  StyledImg,
  styles,
  Wrapper,
  VolumeWrapper,
  BiternessWrapper,
} from 'components/organisms/DetailsWrapper/DetailsWrapper.style';
import beerImg from 'assets/img/beer-bottle.svg';
import { CountUp } from 'use-count-up';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';

Modal.setAppElement('#detailsWrapper');

interface DetailsWrapperProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  beerDetails: {
    name: string;
    image_url: string;
    abv: number;
    ibu: number;
    ingredients: { malt: { name: string }[]; hops: { name: string }[] };
  }[];
}

const DetailsWrapper: React.FC<DetailsWrapperProps> = ({
  closeModal,
  modalIsOpen,
  beerDetails,
}) => {
  const [details] = beerDetails;
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={styles}>
      {details ? (
        <Wrapper>
          <BeerName>{details.name}</BeerName>
          <StyledImg src={details.image_url ? details.image_url : beerImg} />
          <BeerInfo>
            <VolumeWrapper>
              <ProgressProvider
                valueStart={0}
                valueEnd={details.abv < 10 ? details.abv * 2 : details.abv}
              >
                {(value: number) => (
                  <CircularProgressbarWithChildren
                    value={value}
                    circleRatio={0.5}
                    strokeWidth={12}
                    styles={buildStyles({
                      rotation: 1 / 2 + 2 / 8,
                      strokeLinecap: 'butt',
                      pathColor: '#242117',
                      trailColor: '#ffff99',
                    })}
                  >
                    <CountUp
                      isCounting
                      start={0}
                      end={details.abv ? details.abv : 0}
                      duration={2}
                      easing="easeOutCubic"
                      decimalPlaces={1}
                      decimalSeparator={'.'}
                    />
                    %<div>volume</div>
                  </CircularProgressbarWithChildren>
                )}
              </ProgressProvider>
            </VolumeWrapper>
            <BiternessWrapper>
              <ProgressProvider
                valueStart={0}
                valueEnd={details.ibu < 10 ? details.ibu * 2 : details.ibu}
              >
                {(value: number) => (
                  <CircularProgressbarWithChildren
                    value={value}
                    circleRatio={0.5}
                    strokeWidth={12}
                    styles={buildStyles({
                      rotation: 1 / 2 + 2 / 8,
                      strokeLinecap: 'butt',
                      pathColor: '#242117',
                      trailColor: '#ffff99',
                    })}
                  >
                    <CountUp
                      isCounting
                      start={0}
                      end={details.ibu ? details.ibu : 0}
                      duration={2}
                      easing="easeOutCubic"
                    />
                    %<div>biterness</div>
                  </CircularProgressbarWithChildren>
                )}
              </ProgressProvider>
            </BiternessWrapper>
            <IngredientsWrapper>
              <h4>ingredients:</h4>
              <div>
                malt:
                <br />
                {details.ingredients.malt.map(
                  (item: { name: string }, index: number) => (
                    <span key={index}>{item.name}, </span>
                  )
                )}
              </div>
              <div>
                hops:
                <br />
                {details.ingredients.hops.map(
                  (item: { name: string }, index: number) => (
                    <span key={index}>{item.name}, </span>
                  )
                )}
              </div>
            </IngredientsWrapper>
          </BeerInfo>
          <StyledButton onClick={closeModal}>close</StyledButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <h3>Loading...</h3>
          <StyledButton onClick={closeModal}>close</StyledButton>
        </Wrapper>
      )}
    </Modal>
  );
};

export default DetailsWrapper;
