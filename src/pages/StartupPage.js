import React from 'react'
import styled from 'styled-components'
import About from '../Components/StartupPage/ABOUT/About';
import Banner from '../Components/StartupPage/Banner/Banner';
import Navbar from '../Components/StartupPage/Banner/Navbar';
import Features from '../Components/StartupPage/Features/Features';
import Footer from '../Components/StartupPage/FOOTER/Footer';
function StartupPage() {
    // const AboutSection = useRef(null)

    // const gotoAboutSection = () =>{
    //     window.scrollTo({
    //         top: AboutSection.current.offsetTop, 
    //         behavior: 'smooth'
    //     })
    // }
    const title = "ROOZ"
    return (
        <FrontPage>
            <main id="home">
            <Navbar title={title}/>
            <section >
               <Banner/>
            </section>
            <section id="About">
               <About />
            </section>
            <section id="Contact">
               <Features/>
            </section>
            <section>
               <Footer id="Support"/>
            </section>
            </main>
        </FrontPage>
    )
}
export default StartupPage

const FrontPage = styled.div`
height: 100vh;

`;
