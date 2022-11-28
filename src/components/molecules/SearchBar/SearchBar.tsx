import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledInput = styled.input`
  height: 30px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.grey};
  transition: all 0.3s;

  :focus {
    transform: scale(1.05);
    transition: all 0.3s;
  }
`;

const SearchBar: React.FC<{ beersFilter: (param: string) => void }> = ({
  beersFilter,
}) => {
  return (
    <Wrapper>
      <StyledInput
        type="text"
        id="searchBar"
        name="searchBar"
        placeholder="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          beersFilter(e.target.value)
        }
      />
    </Wrapper>
  );
};

export default SearchBar;
