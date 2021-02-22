import React, {useState} from 'react';

import './Integrations.scss'

import uniswap from '../../assets/Integrations/uniswap.png'
import sushi from '../../assets/Integrations/sushi.png'
import harvest from '../../assets/Integrations/Harvest.png'
import synthetics from '../../assets/Integrations/Synthetics.png'
import yaxis from '../../assets/Integrations/Yaxis.png'
import mStable from '../../assets/Integrations/MStable.png'
import pickle from '../../assets/Integrations/Pickle.png'
import luaswap from '../../assets/Integrations/Luaswap.png'
import dhedge from '../../assets/Integrations/Dhedge.png'
import cream from '../../assets/Integrations/Cream.png'
import badger from '../../assets/Integrations/Badger.png'
import tHORChain from '../../assets/Integrations/THORChain.png'
import ren from '../../assets/Integrations/REN.png'
import loopring from '../../assets/Integrations/Loopring.png'
import nexusMutual from '../../assets/Integrations/NexusMutual.png'
import balancer from '../../assets/Integrations/Balancer.png'
import curve from '../../assets/Integrations/Curve.png'
import yearnFinance from '../../assets/Integrations/YearnFinance.png'
import aave from '../../assets/Integrations/Aave.png'
import compound from '../../assets/Integrations/Compound.png'
import hegic from '../../assets/Integrations/Hegic.png'
import kava from '../../assets/Integrations/Kava.png'
import augur from '../../assets/Integrations/Augur.png'
import bZxProtocol from '../../assets/Integrations/BZxProtocol.png'

const integrationsItem = [
  {label: 'Uniswap', icon: uniswap},
  {label: 'Sushi', icon: sushi},
  {label: 'Harvest', icon: harvest},
  {label: 'Synthetics', icon: synthetics},
  {label: 'Yaxis', icon: yaxis},
  {label: 'MStable', icon: mStable},
  {label: 'Pickle', icon: pickle},
  {label: 'Luaswap', icon: luaswap},
  {label: 'Dhedge', icon: dhedge},
  {label: 'Cream', icon: cream},
  {label: 'Badger', icon: badger},
  {label: 'THORChain', icon: tHORChain},
  {label: 'REN', icon: ren},
  {label: 'Loopring', icon: loopring},
  {label: 'NexusMutual', icon: nexusMutual},
  {label: 'Balancer', icon: balancer},
  {label: 'Curve', icon: curve},
  {label: 'YearnFinance', icon: yearnFinance},
  {label: 'Aave', icon: aave},
  {label: 'Compound', icon: compound},
  {label: 'Hegic', icon: hegic},
  {label: 'Kava', icon: kava},
  {label: 'Augur', icon: augur},
  {label: 'BZx Protocol', icon: bZxProtocol},
]

const Integrations = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className='integrations' id='intergrations'>
      <div className="container integrations__container">
        <h2 className="integrations__title title">Integrated with the leading DeFi protocols</h2>
        <div className={isActive ? "integrations__items" : 'integrations__items active'}>
          {
            integrationsItem.map((item, index) => {
              return (
                <div className="integrations__item" key={index}>
                 <div className="integrations__item-container">
                   <div className="integrations__item-icon">
                     <img src={item.icon} alt=""/>
                   </div>
                   <span>{item.label}</span>
                 </div>
                </div>
              )
            })
          }
        </div>
        <div className="integrations__button" onClick={handleToggle}>
          Load more
        </div>
      </div>
    </div>
  );
};

export default Integrations;
