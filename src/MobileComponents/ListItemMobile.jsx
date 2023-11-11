import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import Logo from "../assets/Logo.png";

const Rectangle = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${props => props.bgColor || 'whitesmoke'};
    border-radius: 10px;
    padding: 15px;
    border: none;
    gap: 10px;
`;

const Image = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid black;
`;
const Box = styled.div`
    color: ${props => props.theme == 'light' ? 'white' : 'black'};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    filter: ${props => props.theme == 'light' ? 'brightness(100%)' : 'brightness(0%)'};
`

const Title = styled.p`
    font-weight: 900;
    text-transform: uppercase;
    font-size: 20px;
`
const Text = styled.p`
    font-size: 12px;
    text-transform: uppercase;
`

export default function ListItemMobile(props) {
    return(
        <Rectangle bgColor={props.bgColor}>
            <Image src={props.image} />
            <Box theme={props.theme}>
                <Title><img style={{ height: '5vw' }} src={Logo} /> {props.title}</Title>
                <Text>{props.text}</Text>
            </Box>
        </Rectangle>
    );
}

ListItemMobile.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    theme: PropTypes.string,
};