import React from 'react';
import './top-section.scss'
import heroImg from '../../assets/hero-image.png'

const TopSection = () => {
  return (
    <div className='top-section'>
      <div className="container top-section__container">
        <h1 className='top-section__title'>Decentralized protocol for <span>cross-chain</span> asset management</h1>
        <div className="top-section__text">
          Trade and Swap assets across different blockchains. Add liquidity to earn yield.
        </div>
        <div className="top-section__form">
          <input className='top-section__input' type="text" placeholder='Enter ENS domain, a valid ETH, or BTC address'/>
          <span className='top-section__delimiter'>or</span>
          <a className='top-section__link' href="https://dashdev.defiyield.info/">Сonnect wallet</a>
          <span className='top-section__delimiter'>or</span>
          <a className='top-section__link' href="https://dashdev.defiyield.info/">Explore mode</a>
        </div>
        <div className="top-section__img">
          <img src={heroImg} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
