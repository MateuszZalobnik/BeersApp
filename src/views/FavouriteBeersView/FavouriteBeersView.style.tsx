import styled from 'styled-components';
import background from 'assets/img/beer.jpg';

export const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding: 90px 30px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.yellow};

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const LoadingInfo = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 700;
  ${({ theme }) => theme.mq.desktop} {
    grid-column-start: 2;
  }
`;
