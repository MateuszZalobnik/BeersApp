import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavPropsWrapper {
  modalIsOpen: boolean;
}

export const Nav = styled.nav<NavPropsWrapper>`
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ modalIsOpen }) => (modalIsOpen ? '1' : '100')};
  position: fixed;
  width: 100%;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr;
  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      display: inline-block;
      font-size: ${({ theme }) => theme.fontSize.m};
      border: 2px solid ${({ theme }) => theme.colors.grey};
      border-radius: 15px;
      padding: 5px 10px;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 2fr;
  }
`;

export const StyledLink = styled(Link)`
  min-height: 45px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
`;

export const PagesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    padding-top: 20px;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    li {
      cursor: pointer;
      display: inline-block;
      font-size: ${({ theme }) => theme.fontSize.l};
      border: 2px solid ${({ theme }) => theme.colors.grey};
      border-radius: 15px;
      padding: 0px 10px 7px 10px;
      margin: 0px 15px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  & .active {
    background-color: ${({ theme }) => theme.colors.yellow};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    position: relative;
    &:before {
      left: 50%;
      top: 50px;
      transform: translate(-50%, -50%);
      content: '';
      position: absolute;
      width: 25px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;
