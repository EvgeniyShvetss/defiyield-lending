import React from 'react';

import './footer.scss'
import logo from '../../assets/logo.svg'
import FooterForm from '../FooterForm';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__form-section">
        <FooterForm/>
      </div>
      <div className="container footer__container">
          <div className="footer-block">
            <a href="/" className="footer__logo">
              <img src={logo} alt="Logo"/>
              <span>DEFIYIELD</span>
            </a>
            <div className="footer__text">The all-in-one dashboard allows you to manage your whole investment portfolio in one place. Track pools and vaults with the highest yields, relocate funds across different blockchains, check project information and much more.</div>
          </div>
        <div className="footer__link-block">
          <div className="footer__link-block-title">Platform</div>
          <a href="https://dashdev.defiyield.info/" className="footer__link">Connect wallet</a>
          {/*<a href="/" className="footer__link">Guest mode</a>*/}
          <a href="/" className="footer__link">Ingegrations</a>
        </div>
        <div className="footer__link-block">
          <div className="footer__link-block-title">Resources</div>
          {/*<a href="/" className="footer__link">Blog</a>*/}
          <a href="/" className="footer__link">Knowledge Base</a>
          <a href="/" className="footer__link">Roadmap</a>
        </div>
        <div className="footer__link-block">
          <div className="footer__link-block-title">Community</div>
          <a href="/" className="footer__link">Telegram</a>
          <a href="/" className="footer__link">Twitter</a>
          <a href="/" className="footer__link">Medium</a>
        </div>
      </div>
      <div className="container">
        <div className="footer__copyright">
          <div className="footer__copyright-text">© DeFiYield. All rights reserved.</div>
          <div className="footer__copyright-links">
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
