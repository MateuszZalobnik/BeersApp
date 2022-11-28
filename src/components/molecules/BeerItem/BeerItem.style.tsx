import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 1;
  position: relative;
  margin: 130px auto 100px auto;
  height: 200px;
  width: 200px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  gird-template-columns: 1fr 2fr;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.itemBackground};
  color: ${({ theme }) => theme.colors.grey};
  height: 220px;
  width: 220px;
  position: relative;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(190, 190, 33, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(190, 190, 33, 1);
  box-shadow: 8px 8px 24px 0px rgba(190, 190, 33, 1);
  -webkit-box-shadow: inset 78px 65px 100px -33px rgba(206, 206, 16, 1);
  -moz-box-shadow: inset 78px 65px 100px -33px rgba(206, 206, 16, 1);
  box-shadow: inset 78px 65px 100px -33px rgba(206, 206, 16, 1);
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }
`;

export const ItemName = styled.h4`
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 0px;
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: ${({ theme }) => theme.fontSize.l};
  background: ${({ theme }) => theme.colors.itemBackground};
  border-radius: 17px;
  padding: 2px 5px;

  span {
    opacity: 1;
  }
`;

export const InfoWrapper = styled.div`
  align-self: end;
  padding: 0px 0px 50px 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  grid-column-start: 2;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 110px;
  position: relative;
  margin-left: -40px;
  img {
    height: 230px;
    max-width: 110px;
  }
`;

export const FavouriteIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  right: -20px;
  top: 0;
`;
