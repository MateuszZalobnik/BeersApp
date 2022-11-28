import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.punkapi.com/v2/beers?';

const beersAPI = axios.create({});

export const useBeers = () => {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState('1');

  useEffect(() => {
    beersAPI
      .get(API_URL + 'page=1&per_page=80')
      .then(function ({ data }) {
        // handle sucess
        setBeers(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const getBeersByPage = (page = '1') => {
    beersAPI
      .get(API_URL + `page=${page}&per_page=80`)
      .then(function ({ data }) {
        // handle sucess
        setBeers(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    setCurrentPage(page);
  };

  const beersFilter = (searchPhrase: string) => {
    if (searchPhrase.length > 0) {
      beersAPI
        .get(API_URL + `beer_name=${searchPhrase}`)
        .then(function ({ data }) {
          // handle sucess
          setBeers(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      beersAPI
        .get(API_URL + `page=${currentPage}&per_page=80`)
        .then(function ({ data }) {
          // handle sucess
          setBeers(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };

  return {
    beersFilter,
    getBeersByPage,
    beers,
    currentPage,
  };
};
