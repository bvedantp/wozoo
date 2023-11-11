import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../assets/Logo.png";
import PhMagnifyingGlassBold from '~icons/ph/magnifying-glass-bold'

const TopBar = styled.header`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 50px;
padding: 20px 100px;

color: white;
background: rgb(12,6,27);
background: linear-gradient(93deg, rgba(12,6,27,1) 0%, rgba(59,47,123,1) 100%);
`

const LogoImage = styled.img`
  width: 100px;
  margin-right: auto;
  filter: ${props => props.filter};
  transition: filter 0.3s ease;
  cursor: pointer;
`;


const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        background: #664799;
        border: none;
        padding: 10px 10px 10px 0;
        border-radius: 0 5px 5px 0;
        color: white;
        font-family: 'OuickSand', sans-serif;


        &::placeholder {
            color: white;
            font-family: 'OuickSand', sans-serif;
            font-size: 15px;
            opacity: 1; /* Override any browser default opacity */
        }

        /* For Internet Explorer 10-11 */
        &:-ms-input-placeholder {
            color: white;
        }

        /* For Microsoft Edge */
        &::-ms-input-placeholder {
            color: white;
        }
        
        &:focus {
            outline: none; // This removes the outline
        }
    }
    
`

  const filters = [
    '',
    'invert(79%) sepia(82%) saturate(879%) hue-rotate(349deg) brightness(99%) contrast(96%)',
    'invert(25%) sepia(73%) saturate(6619%) hue-rotate(211deg) brightness(99%) contrast(101%)',
    'invert(58%) sepia(35%) saturate(1381%) hue-rotate(289deg) brightness(92%) contrast(91%)',
    'invert(57%) sepia(74%) saturate(5333%) hue-rotate(227deg) brightness(98%) contrast(104%)',
  ];

export default function Header() {
    const [filterIndex, setFilterIndex] = useState(0);

    const handleClick = () => {
      // Set a new random filter
      setFilterIndex(prevIndex => (prevIndex + 1) % filters.length);
    };

    return(
        <TopBar>
            <LogoImage
                src={Logo}
                alt="logo"
                filter={filters[filterIndex]}
                onClick={handleClick}
            />
            <p>Home</p>
            <p>Products</p>
            <p>About Us</p>
            <SearchBar>
                <PhMagnifyingGlassBold style={{ background: '#664799', height: '35px', width: '35px', padding: '10px 0 10px 0' }}/>
                <input type="text" placeholder="Search" />
            </SearchBar>
        </TopBar>
    )
}