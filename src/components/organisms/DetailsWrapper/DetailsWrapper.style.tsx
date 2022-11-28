import styled from 'styled-components';

export const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
};

export const Wrapper = styled.div`
  width: 100vw;
  max-height: 100vh;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.yellow};
  -webkit-box-shadow: inset 100px 100px 100px -32px rgba(181, 158, 14, 1);
  -moz-box-shadow: inset 100px 100px 100px -32px rgba(181, 158, 14, 1);
  box-shadow: inset 100px 100px 100px -32px rgba(181, 158, 14, 1);
  ${({ theme }) => theme.mq.desktop} {
    width: 700px;
  }
`;

export const BeerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const BeerName = styled.h2`
grid-column-start: 1;
grid-column-end: 3;
text-align: center;
margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  position: relative:
`;

export const VolumeWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  font-size: ${({ theme }) => theme.fontSize.l};

  ${({ theme }) => theme.mq.desktop} {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

export const BiternessWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 3px solid ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  font-size: ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.mq.desktop} {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

export const IngredientsWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  margin-top: 30px;
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.s};
  div {
    margin-top: 20px;
    text-align: justify;
  }
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const StyledImg = styled.img`
  margin: auto;
  width: 120px;
`;

export const StyledButton = styled.button`
  min-width: max-content;
  width: 50%;
  margin: 20px auto;
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: ${({ theme }) => theme.fontSize.l};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.grey};
  background: rgba(0, 0, 0, 0);
`;
