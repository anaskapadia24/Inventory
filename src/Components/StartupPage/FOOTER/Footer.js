import React from 'react'
import WEBSITE_LOGO from '../../../Assets/logo.png'
// import styled from 'styled-components'
// import List from './List'
import '../FOOTER/Footer.css'
function Footer() {
    return (
        <div className='background-Footer'>
          
           <div className='footers'> 
               <div className='colum'>

                   <div className='rown'>
                   <img className='logos' src={WEBSITE_LOGO} alt="Loading"/><span>ROOZ</span>
                    <div className='address'>
                        <p>No.11, 2nd floor, 80 FT Road</p>
                        <p>4th Block, S.T Bed, Koramangala</p>
                        <p>Bengaluru – 560034</p>
                     </div>
                   </div>

                   <div className='row'>
                     <h3 className='headings'>Products</h3>
                      <div className='uln'>
                       <li className='lon'><a href="/">Stocks</a></li>
                       <li className='lon'><a href="/">Future & Options</a></li>
                       <li className='lon'><a href="/">Mutual Funds</a></li>
                       <li className='lon'><a href="/">Fixed Deposit</a></li>
                       <li className='lon'><a href="/">US Stocks</a></li>
                   
                      </div>
                   </div>

                   <div className='row'>
                     <h3 className='headings'>BROOZ</h3>
                      <div className='uln'>
                       <li className='lon'><a href="/">About Us</a></li>
                       <li className='lon'><a href="/">Pricing</a></li>
                       <li className='lon'><a href="/">Blog</a></li>
                       <li className='lon'><a href="/">Media & Press</a></li>
                       <li className='lon'><a href="/">Careers</a></li>
                       <li className='lon'><a href="/">Help and Supports</a></li>
                      </div>
                   </div>

                   <div className='row'>
                     <h3 className='headings'>Quick Links</h3>
                      <div className='uln'>
                       <li className='lon'><a href="/">AMC Mutual Funds</a></li>
                       <li className='lon'><a href="/">Calculators</a></li>
                       <li className='lon'><a href="/">Glossary</a></li>
                       <li className='lon'><a href="/">Open Demat Account</a></li>
                       <li className='lon'><a href="/">BROOZ Digest</a></li>
                       <li className='lon'><a href="/">BROOZ Academy</a></li>
                       <li className='lon'><a href="/">Sitemap</a></li>
                      </div>
                   </div>
     </div>
     <div className='topns'></div>
           <div className='end-footn'>
               <div className='end-linem'>
               ⓒ 2019-2022 BROOZ. All rights reserved, Built with <span className="dil"> ♥ </span>in India
               </div>
               <div className='two-imgn'>
                <img className='app' src="https://files.coinswitch.co/ui/public/images/appstore.png?version=2021081913"alt=""/>
                <img className='app' src="https://files.coinswitch.co/ui/public/images/google-play.png?version=2021081913"alt=""/>
               </div>
           </div>
</div>


</div>

    )
}

export default Footer

// const FooterLayout = styled.div`
// /* background-color: #1e2232; */
// background:#091135 ;
// color: white;
// width: 100%;
// height: 420px;
// margin-top: 25px;
// .footer-column{
// display: flex;
//     .Info-column{
//         margin-left: 7%;
//         margin-top: 45px;
//         padding: 0px 15px;
//             .footer-address{
//                 margin-left: 15px;
//                 margin-top: 20px;
//                 font-size: 16px;
//                 color: white;
//             }
//             span{
//                 font-size: 40px;
//                 position: relative;
//                 top: 15px;
//                 right: 5px;
//                 transition: 0.3s all ease-in-out;
//                 color: white;
//             }
//             .footer-logo{
//                  width: 60px;
//                 height: 60px;
//             }
//     }
// }
// .Company-Rights{
//     display: flex;
//    margin-top: 10px;
//    .end-linem{
//        margin-left: 45px;
//        font-size: 18px;
//        .dil{
//          color: #eb5b3c;
//          font-size: 20px;
//          margin: 0px 2px;
//        }
//    }
//    .Sponsers{
//        text-align: right;
//        margin-left: 35%;
//        .app{
//            width: 130px;
//            margin: 0px 10px;
//            margin-top: -10px;
//        }
//    }
// }



// `;