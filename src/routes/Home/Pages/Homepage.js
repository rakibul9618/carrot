import React, { useEffect } from 'react';
import Header from '../Components/Common/Header/Header';
import Home from '../Components/Homepage/Home';
import '../Assets/styles/normalize.css';

const Homepage = () => {
  useEffect(() => {
    document.body.classList.remove('no-overflow');
    document.body.classList.add('overflow');
  }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default Homepage;
