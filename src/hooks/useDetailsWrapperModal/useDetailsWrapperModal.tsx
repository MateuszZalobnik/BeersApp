import { useState } from 'react';
import axios from 'axios';

const useDetailsWrapperModal = (initialState = false) => {
  const [modalIsOpen, setIsOpen] = useState(initialState);
  const [beerDetails, setBeerDetails] = useState([]);

  function openModal(id: number) {
    axios
      .get(`https://api.punkapi.com/v2/beers?ids=${id}`)
      .then(function ({ data }) {
        // handle sucess
        setBeerDetails(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setBeerDetails([]);
  }

  return {
    setIsOpen,
    modalIsOpen,
    closeModal,
    openModal,
    beerDetails,
  };
};

export default useDetailsWrapperModal;
