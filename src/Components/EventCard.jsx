import React from "react";
import { styled } from "styled-components";
import MdiMapMarkerOutline from '~icons/mdi/map-marker-outline'
import LineMdCalendar from '~icons/line-md/calendar'
import CharmShoppingBag from '~icons/charm/shopping-bag'

const Card = styled.div`
    background-color: black;
    width: 350px;
    /* height: 600px; */
    color: white;
    padding-bottom: 5px;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    border-radius: 10px;
`
const GrayBlock = styled.div`
    background-color: #E5E5E5;
    height: ${props => props.imageHeight ? props.imageHeight : '300px'};
    width: 100%;
    border-radius: 10px 10px 0 0;
`;
const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 100%;

    p {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`
const Button = styled.button`
    cursor: pointer;
    color: black;
    background: #fff;
    font-size: 1.3em;
    font-weight: 700;
    padding: 0;
    border-radius: 10px;
    width: 100%;
    text-align: left;

    border: 0;
    position: relative;
    overflow: hidden;

    display: flex; 
    align-items: center;  
    justify-content: space-between;  

`;
const ButtonContent = styled.span`
    padding: 0 0 0 10px;  
    flex-grow: 1;  // Allow it to take up available space
`;
const ButtonLabel = styled.i`
    color: #8160E9;
    background-color: #F7CC11;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 10px;
    border-radius: 0 10px 10px 0;
`;

import PropTypes from 'prop-types';

export default function EventCard(props) {

    return(
        <Card>
            <GrayBlock imageHeight={props.imageHeight} ></GrayBlock>
            <TextArea>
                <p style={{ textTransform: 'uppercase', fontSize: '1.3vw' }} >Comedy Special</p>
                
                <p><LineMdCalendar style={{ fontSize: '1.3vw'}} /> datetime</p>
                <p><MdiMapMarkerOutline style={{ fontSize: '1.3vw'}}/> location</p>
                <Button>
                    <ButtonContent>$299 Onwards</ButtonContent>
                    <ButtonLabel>Buy Now <CharmShoppingBag/></ButtonLabel>
                </Button>
            </TextArea>
        </Card>
    )
}

EventCard.propTypes = {
    imageHeight: PropTypes.string,
};
