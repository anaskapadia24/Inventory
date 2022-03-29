import React from 'react'
import { Button, Icon } from 'rsuite'
import styled from 'styled-components'
import FadeIn from 'react-fade-in/lib/FadeIn';
function BannerText(props) {
    return (
        <div className='Banner-centr'>
            <TextBanner>
                <Fades transitionDuration="500">
                <div className='Nav_Head'>
                <h1>{props.head}</h1>
                </div>
                <div className='Nav_Text'>
                <p>{props.summary}</p>
                </div>
                <div className='Nav_Btn'>
                <Button >Get Started Now <Icon icon="play2"/></Button>
                </div>
                </Fades>
            </TextBanner>
        </div>
    )
}

export default BannerText

const TextBanner = styled.div`
/* border: 2px solid green; */
width:85vw;
height: 400px;
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;
margin-top:22%;
.Nav_Btn{
      border: 2px solid white; 
      display: inline-block;
    margin-top: 20px;
    border-radius:5px;
    Button{
     
        font-size: 20px;
         color: white;
        // background-color:#e5a023; 
        background:none;
       
  
    }
    &:hover{
        color: white;
        background-color: #c4990c;
        border: 2px solid #c4990c;
        transition: 0.8s all ease-in-out;
    }
}
`;
const Fades = styled(FadeIn)`
transition: 0.3s all ease-in-out;
`;
