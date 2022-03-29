import React from 'react'
import BACKGROUND_IMAGE from '../../../Assets/bg.jpg'
import styled from 'styled-components'
import Navbar from './Navbar'
import BannerText from './BannerText'

function Banner() {
    const title = "ROOZ"
    return (
        <Background id="home">
            {/* ------ NAVBAR------ */}
            <Navbar title={title} />
            {/* --- NAVBAR ENDS ----*/}

            {/* --- TEXT-SECTION--- */}
            <Text>
                 <BannerText head={"ONE PLATFORM MULTIPLE INVESTEMENT OPTION."}  summary={"Don`t Let The Fear Of Losing Be Greater Then Excitement Of Winning."} /> 
            </Text>
        </Background>
    )
}

export default Banner

const Background = styled.div`
width: 100%;
background-image:linear-gradient(to top,rgb(0 0 0 / 52%),rgb(47 49 114 / 73%)),url(${BACKGROUND_IMAGE}); 
background-size:  cover;
background-position: center;
height: 800px;
`;
const Text = styled.div`
display: flex;
 justify-content: center; 
align-items: center;
/* border: 2px solid red; */
width: 100%;
height: 500px;
color: white;
padding-left: 10%;
;
`