// import { getAllByAltText } from '@testing-library/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Icon } from 'rsuite';
import styled from 'styled-components';
import WEBSITE_LOGO from '../../../Assets/logo.png'


function Navbar() {
    const [click,setClick] = useState(false)

   const handleClick = ()=> setClick(!click);

//    const [{user}, dispatch] = useStateValue();

//    const history = useHistory()

//    const handleAuthentication = () => {
//       if(user){
//         auth.signOut();
//         // history.push('/')
//       }
//  }

const NavMenu = [
    {
       text: "Home",
       icon: "home",                 
    },
    {
        text: "About",
        icon:"adjust"
    },
    {
        text: "Contact",
        icon:"address-book"
    },
    {
        text: "Support",
        icon:"user"
    }
]

return (

    <Nav className='Nav-All' >
     
          <div className='Nav_Logo'>
    
            <Link to="/">
           <img src={WEBSITE_LOGO} alt="Loading"/><span>ROOZ</span>
           </Link>
           
           <div className='nav-burger' onClick={handleClick}>
                   <i className={click ? "fas fa-times":"fas fa-bars"}></i>
                  </div>
        </div>
   

        <div className={click ? 'Nav_Navigation Nav_Menu active' : 'Nav_Navigation'}>
               {NavMenu.map((Nav , Key)=> {
                   return(
                     
                       <div className="Nav_Menu" key={Key}>
                         
                           <Icon id="icon" icon={Nav? Nav.icon : "logo"}/> <span>{Nav.text}</span>
                       
                       </div>  
                                         
                   )})}
                  
                   <div className='Nav_btn'>
                       <Link to = '/signin'>
                   <Button color="orange">SignIn</Button>
                   </Link>

                   <Link to = '/Registr'>
                   <Button color="orange">Register</Button>
                   </Link>
                   </div>
                   </div>

                

{/* </div>   */}
              
</Nav>

   
)
}
export default Navbar

const Nav = styled.div`
.Nav_Logo{
    margin-bottom: 15px;
    cursor: pointer;
    display:flex;
        a{
            text-decoration: none;
        }
        img{
            width: 60px;
            height: 60px;
        }
        span{
            font-size: 40px;
            position: relative;
            top: 15px;
            right: 5px;
            transition: 0.3s all ease-in-out;
            color: white;
        }
&:hover span{
    color: #c4990c;
   
}
}
.Nav_Navigation{
display: flex;
justify-content: space-around;
padding: 10px 10px;
    .Nav_Menu{
        display: block;
        text-align: center;
        cursor: pointer;
        padding: 6px 10px;
        margin-right: 8px ;
        transition: 0.3s all ease-in-out;
            &:hover{
            color: #c4990c;
            transform: scale(1.1);
           
            }
    #icon{
        font-size: 16px;
    }
    span{
        font-size:18px;
        font-weight: 600;
       
    }
}
.Nav_btn{
    Button{
        margin-right: 5px;
        height: 32px;
        line-height: 0;
        background-color: transparent;
        border: 2px solid #c4990c;
        color: #c4990c;
            &:hover{
                color: white;
                background-color: #c4990c;
            }
    }

}

}

`;