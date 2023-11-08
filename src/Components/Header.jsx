import React from "react";
import styled from "styled-components";
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
`
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

export default function Header() {

    return(
        <TopBar>
            <LogoImage src={Logo} alt="logo" />
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