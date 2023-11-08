import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import Logo from "../assets/Logo.png";

const Rectangle = styled.button`
    display: flex;
    width: 30vw;
    height: 160px;
    background-color: ${props => props.bgColor || 'whitesmoke'};
    border-radius: 10px;
    padding: 15px;
    border: none;
    gap: 10px;
`;

const Image = styled.img`
    height: 100%;
    border-radius: 10px;
    border: 1px solid black;
`;
const Box = styled.div`
    color: ${props => props.theme == 'light' ? 'white' : 'black'};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    align-items: flex-start;
    filter: ${props => props.theme == 'light' ? 'brightness(100%)' : 'brightness(0%)'};
`

const Title = styled.p`
    font-weight: 900;
    text-transform: uppercase;
    font-size: 2vw;
`
const Text = styled.p`
    font-size: 1.6vw;
    text-transform: uppercase;
    text-align: left;
`

export default function ListItem(props) {
    return(
        <Rectangle bgColor={props.bgColor}>
            <Image src={props.image} />
            <Box theme={props.theme}>
                <Title><img style={{ height: '2.3vw' }} src={Logo} /> {props.title}</Title>
                <Text>{props.text}</Text>
            </Box>
        </Rectangle>
    );
}

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    theme: PropTypes.string,
};