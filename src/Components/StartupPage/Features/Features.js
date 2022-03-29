import React from 'react'
import styled from 'styled-components'
import Circle from '../../../Styles/Circle';

function Features() {
    return (
        <AppFeatures>

        <div className='Features-All'>
            <h2 className='head-title'> BROOZ Features</h2> 

            <div className='mixed'>
                <div className='first'>
                 <img className='first-image' src="https://files.coinswitch.co/ui/public/images/kuber-asset.png?version=2021081913" alt=""/>
                 <div>
                 <Circle text={"50%"}/><br/><br/><br/>
                 <Circle text={"50%"}/>
                 </div>
                </div>

                <div className='second-s'>
                     <div className='another-s'>

                         <div className='start-s'>
                             <img className='second-image-s' src='https://files.coinswitch.co/ui/public/images/fluent-natural-interface.png?version=2021081913' alt=''/>
                           <div className='writen-s'>
                               <h4 className='hds-s'>Simple Design</h4>
                               <p className='paraa-s'>Easiest platform to Buy, Sell and manage your investments. Instantly deposit, withdraw and trade over 100 assets with ease.</p>
                           </div>
                         </div>

                     </div>

                     <div className='another-s'>
                         
                         <div className='start-s'>
                             <img className='second-image-s' src='https://files.coinswitch.co/ui/public/images/fluent-exchange.png?version=2021081913' alt=''/>
                           <div className='writen-s'>
                               <h4 className='hds-s'>Best Rates</h4>
                               <p className='paraa-s'>By aggregating liquidity across major Indian and global exchanges, BROOZ order matching engine provides you the best rate at a click of the button.</p>
                           </div>
                         </div>

                     </div>

                     <div className='another-s'>
                         
                         <div className='start-s'>
                             <img className='second-image-s' src='https://files.coinswitch.co/ui/public/images/fluent-sale.png?version=2021081913' alt=''/>
                           <div className='writen-s'>
                               <h4 className='hds-s'>Zero Fees</h4>
                               <p className='paraa-s'>ZERO INR trading, deposit and withdrawal fees for first 100 days.</p>
                           </div>
                         </div>

                     </div>


                     <div className='another-s'>
                         
                         <div className='start-s'>
                             <img className='second-image-s' src='https://files.coinswitch.co/ui/public/images/kuber-secure.png?version=2021081913' alt=''/>
                           <div className='writen-s'>
                               <h4 className='hds-s'>Trusted and Secure</h4>
                               <p className='paraa-s'>CoinSwitch trading platform has processed over $5 billion and brings the same trust and security to BROOZ.</p>
                           </div>
                         </div>

                     </div>
                </div>
            </div>
        </div>
        </AppFeatures>
    )
}

export default Features

const AppFeatures = styled.div`
`;