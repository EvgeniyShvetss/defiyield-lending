import React from 'react';
import checkIcon from '../../assets/check.svg';
import './footer-form.scss'

const FooterForm = () => {
  return (
    <div className="footer__form">
      <div className="footer__form-wrapper">
        <div className="footer__form-text">Get started your DeFi journey today</div>
        <div className="footer__form-list footer__form-list__mobile">
          <div className="footer__form-list-item">
            <img src={checkIcon} alt=""/>
            <span>Dashboard</span>
          </div>
          <div className="footer__form-list-item">
            <img src={checkIcon} alt=""/>
            <span>Pools</span>
          </div>
          <div className="footer__form-list-item">
            <img src={checkIcon} alt=""/>
            <span>Vaults</span>
          </div>
        </div>
        <input className='footer__form-input' type="text" placeholder='Enter ENS domain, a valid ETH, or BTC address'/>
        <span className='footer__form-delimiter'>or</span>
        <a className='footer__form-button white' href="https://dashdev.defiyield.info/">Connect Wallet</a>
        <span className='footer__form-delimiter'>or</span>
        <a className='footer__form-button dark' href="https://dashdev.defiyield.info/">Explore more</a>
      </div>
      <div className="footer__form-list">
        <div className="footer__form-list-item">
          <img src={checkIcon} alt=""/>
          <span>Dashboard</span>
        </div>
        <div className="footer__form-list-item">
          <img src={checkIcon} alt=""/>
          <span>Pools</span>
        </div>
        <div className="footer__form-list-item">
          <img src={checkIcon} alt=""/>
          <span>Vaults</span>
        </div>
        <div className="footer__form-list-item">
          <img src={checkIcon} alt=""/>
          <span>Portfolio</span>
        </div>
        <div className="footer__form-list-item">
          <img src={checkIcon} alt=""/>
          <span>Contracts</span>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
