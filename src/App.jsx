import Header from './Components/Header'
import TitlePage from './Components/TitlePage'
import CountdownPage from './Components/CountdownPage'
import WozooList from './Components/WozooList'
import PopularEvents from './Components/PopularEvents'
import BrowseGenre from './Components/BrowseGenre'
import Footer from './Components/Footer'

import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'QuickSand';
  src: url('/assets/fonts/Quicksand-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  }
  @font-face {
    font-family: 'QuickSand';
    src: url('/assets/fonts/Quicksand-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Dangsik';
    src: url('/assets/fonts/DANGSIK.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'QuickSand', sans-serif; // Setting QuickSand as the default font
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

function App() {

  return (
    <>
      <GlobalStyle />
      <Header/>
      <TitlePage/>
      <CountdownPage/>
      <BrowseGenre/>
      <PopularEvents titleColor={'white'} background={'#E263B2'} />
      <PopularEvents circleColor={'#E263B2'} circleContrast={'#F2D212'} imageHeight={'200px'} isWhiteButton={true}/>
      <PopularEvents circleColor={'#E263B2'} circleContrast={'#F2D212'} imageHeight={'200px'} isWhiteButton={true}/>

      <WozooList/>
      <Footer/>
    </>
  )
}

export default App
