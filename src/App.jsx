import Header from './Components/Header'
import TitlePage from './Components/TitlePage'
import CountdownPage from './Components/CountdownPage'
import WozooList from './Components/WozooList'
import PopularEvents from './Components/PopularEvents'
import BrowseGenre from './Components/BrowseGenre'
import Footer from './Components/Footer'

import Logo from './assets/Logo.png'
import IcBaselineKeyboardArrowRight from '~icons/ic/baseline-keyboard-arrow-right'
import MaterialSymbolsChevronLeftRounded from '~icons/material-symbols/chevron-left-rounded'
import { createGlobalStyle, styled } from 'styled-components';
import { useIsMobile } from './utility/useIsMobile'
import { useEffect, useState } from 'react'

import TitlePageMobile from './MobileComponents/TitlePageMobile'
import WozooListMobile from './MobileComponents/WozooListMobile'
import CountdownPageMobile from './MobileComponents/CountdownPageMobile'
import BrowseGenreMobile from './MobileComponents/BrowseGenreMobile'
import PopularEventsMobile from './MobileComponents/PopularEventsMobile'
import FooterMobile from './MobileComponents/FooterMobile'
import { animateScroll } from 'react-scroll';
import IcSharpKeyboardDoubleArrowUp from '~icons/ic/sharp-keyboard-double-arrow-up'

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'QuickSand';
  src: url('./assets/fonts/Quicksand-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  }
  @font-face {
    font-family: 'QuickSand';
    src: url('./assets/fonts/Quicksand-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Dangsik';
    src: url('./assets/fonts/DANGSIK.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'QuickSand', sans-serif; // Setting QuickSand as the default font
  }
  html {
    scroll-behavior: smooth;
  }
  #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }
`;

//styles for mobile
const SideNavMobile = styled.div`
  background: #e100ff;
  background: linear-gradient(180deg, rgba(247,200,16,1) 0%, rgba(226,98,172,1) 100%);
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  padding: 10px;
`
const OuterLayer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 2;

  &.tilt {
    overflow: hidden;
    pointer-events: none;

    #tilt-content {
      transform: rotate(-10deg) translateZ(0);
    }
  }
`
const TiltEffect = styled.div`
  transform-origin: -10% 20%;
  background-color: white;
  width: 100%;
  position: relative;
  pointer-events: auto;
  z-index: 3;
  transition: transform 0.3s ease;
  box-shadow: 10px 10px 20px 1px black;
`
const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgb(31,22,67);
  background: linear-gradient(133deg, rgba(31,22,67,1) 0%, rgba(56,45,118,1) 100%);

  img {
    width: 70px;
  }
`
const ScrollUpwards = styled.button`
  position: fixed; // Example: fixed position
  bottom: 20px;    // Example: position from bottom
  right: 20px;     // Example: position from right
  justify-content: center;
  align-items: center;
  background-color: yellow;
  color: black;
  border-radius: 50%;
  padding: 10px;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  z-index: 99;

  display: ${props => props.show ? 'flex' : 'none'};
  transition: all 1s;
`;

function App() {
  const isMobile = useIsMobile();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
      const handleScroll = () => {
          let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          if (currentScroll > lastScrollTop) {
              // Scrolling down
              setShowButton(false);
          } else {
              // Scrolling up
              setShowButton(true);
          }
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const scrollToTop = () => {
    const options = {
      duration: 100,
      smooth: true,
    };
    animateScroll.scrollToTop(options);
  };

  return (
    <>
      {isMobile ? 
        <>
          <GlobalStyle />
          <SideNavMobile>
            <IcBaselineKeyboardArrowRight onClick={() => setSideMenuOpen(prev => !prev)} style={{ fontSize: '26px' }} />
            <p>Home</p>
            <p>Products</p>
            <p>About Us</p>
          </SideNavMobile>
          
          <OuterLayer className={sideMenuOpen ? 'tilt' : ''}>
            <TiltEffect id='tilt-content'>
              <>
                {/* header */}
                <HeaderMobile>
                  <img src={Logo} />
                  <MaterialSymbolsChevronLeftRounded onClick={() => setSideMenuOpen(prev => !prev)} style={{ fontSize: '26px', color: 'white' }} />
                </HeaderMobile>
                
                <TitlePageMobile/>
                <WozooListMobile/>
                <CountdownPageMobile/>
                <BrowseGenreMobile/>
                <PopularEventsMobile isPrimary={true} titleColor={'white'} background={'#E263B2'}/>
                <PopularEventsMobile type={'music'} circleColor={'#E263B2'} circleContrast={'#F2D212'} />
                <PopularEventsMobile type={'funny'} circleColor={'#E263B2'} circleContrast={'#F2D212'} />
                <PopularEventsMobile type={'theatre'} circleColor={'#E263B2'} circleContrast={'#F2D212'} />
                <PopularEventsMobile type={'festival'} circleColor={'#E263B2'} circleContrast={'#F2D212'} />
                <PopularEventsMobile type={'business'} circleColor={'#E263B2'} circleContrast={'#F2D212'} />
                <FooterMobile/>
                <ScrollUpwards onClick={scrollToTop} show={showButton}>
                  <IcSharpKeyboardDoubleArrowUp />
                </ScrollUpwards>
              </>
            </TiltEffect>
          </OuterLayer>
        </> 
        : 
        <>
          <GlobalStyle />
          <Header/>
          <TitlePage/>
          <WozooList/>
          <CountdownPage/>
          <BrowseGenre/>
          <PopularEvents isPrimary={true} titleColor={'white'} background={'#E263B2'} />
          <PopularEvents type={'music'} circleColor={'#E263B2'} circleContrast={'#F2D212'} imageHeight={'200px'} isWhiteButton={true}/>
          <PopularEvents type={'funny'} circleColor={'#E263B2'} circleContrast={'#F2D212'} imageHeight={'200px'} isWhiteButton={true}/>
          <PopularEvents type={'theatre'} circleColor={'#E263B2'} circleContrast={'#F2D212'} imageHeight={'200px'} isWhiteButton={true}/>
          <PopularEvents type={'festival'} circleColor={'#E263B2'} circleContrast={'#F2D212'} imageHeight={'200px'} isWhiteButton={true}/>
          <PopularEvents type={'business'} circleColor={'#E263B2'} circleContrast={'#F2D212'} imageHeight={'200px'} isWhiteButton={true}/>          
          <Footer/>  
          <ScrollUpwards onClick={scrollToTop} show={showButton}>
            <IcSharpKeyboardDoubleArrowUp />
          </ScrollUpwards>
        </>}
    </>
  )
}

export default App
