import React from 'react';
import Steps from 'rc-steps'
import './features.scss'
import doneIcon from '../../assets/done.svg'
import clockIcon from '../../assets/clock.svg'

const Features = () => {
  const Icon = ({type}) => <img src={type} alt='icon' />;
  return (
    <div className='features' id='feautures'>
      <div className="container">
        <h2 className="features__title title">Features</h2>
        <div className="features__items">
          <Steps current={2} icon={doneIcon}>
            <Steps.Step  icon={<Icon type={doneIcon}/>} title="Cross-chain DeFi Dashboard" description='The all-in-one dashboard allows you to manage your whole investment portfolio in one place. Track pools and vaults with the highest yields, relocate funds across different blockchains, check project information and much more, using the Defiyield DeFi dashboard.' />
            <Steps.Step icon={<Icon type={doneIcon}/>} title="Defi Yield L2 dEX Aggregator" description='Sourcing liquidity from DEXes, Defi Yield provides better token swap rates than any single DEX. The solution we offer is layer-2, meaning you will be saving on fees with every transaction you broadcast.' />
            <Steps.Step icon={<Icon type={clockIcon}/>} title="Yield Farming Optimizer" description='An automatic solution for the best returns: no more thinking about constant funds relocation for higher returns. The technology behind YFO allows for the automatic placement of your funds among the plethora of pools with the highest interest rates.' />
            <Steps.Step icon={<Icon type={clockIcon}/>} title="Defi Yield Community-Driven Governance" description='Defi Yield is decentralized and governed by the community. Anyone can join as a stakeholder for our project and have a real say in the decision-making of the protocol.' />
            <Steps.Step icon={<Icon type={clockIcon}/>} title="CrossChain Spot Trading " description='Swap your coins across connected chains in a secure and decentralized way with Defi Yield. Benefit from the best yield farming opportunities, boost your returns with the help of the efficient asset management dashboard, trade in the most secure and easy way - all within Defi Yield' />
          </Steps>
        </div>
      </div>
    </div>
  );
};

export default Features;
