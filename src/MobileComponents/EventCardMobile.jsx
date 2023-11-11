import React from "react";
import { styled } from "styled-components";
import MdiMapMarkerOutline from '~icons/mdi/map-marker-outline'
import LineMdCalendar from '~icons/line-md/calendar'
import CharmShoppingBag from '~icons/charm/shopping-bag'
import PropTypes from 'prop-types';

const Card = styled.div`
    position: relative;
    background-color: black;
    width: ${props => props.isPrimary ? '170px' : '150px'}; //170px for primary and 150px for others
    /* height: 600px; */
    color: white;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    border-radius: 10px;
`
const DateTimeFloat = styled.p`
    position: absolute;
    color: white;
    background-color: #E263B2;
    padding: 3px;
    border-radius: 10px;
    right: 2%;
    top: 2%;
    font-size: 0.8rem;
    font-weight: 900;
`
const GrayBlock = styled.div`
    background-color: #E5E5E5;
    height: ${props => props.isPrimary ? '150px' : '100px'}; //for primary 150px and others 100px
    width: 100%;
    border-radius: 10px 10px 0 0;
`;
const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
    width: 100%;

    p {
        display: flex;
        align-items: center;
        /* gap: 5px; */
        font-size: 0.8rem;
    }
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    cursor: pointer;
    color: black;
    background: #fff;
    font-size: 0.8em;
    font-weight: 900;
    padding: 0;
    border-radius: 5px;
    width: 40%;
    text-align: left;

    border: 0;
    position: relative;
    overflow: hidden;

    display: flex; 
    align-items: center;  
    justify-content: space-between;  

`;
const ButtonContent = styled.span`
    padding: 0 0 0 5px;  
    /* flex-grow: 1;  // Allow it to take up available space */
`;
const ButtonLabel = styled.i`
    color: #8160E9;
    background-color: #F7CC11;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: ${props => props.isPrimary ? '3px 3px 3px 5px' : '3px 1px 3px 3px'};
    font-size: ${props => props.isPrimary ? '1rem' : ''};
    border-radius: 0 5px 5px 0;
`;


export default function EventCardMobile(props) {

    return(
        <Card isPrimary={props.isPrimary}>
            <DateTimeFloat>12-02-2024</DateTimeFloat>
            <GrayBlock isPrimary={props.isPrimary}></GrayBlock>
            <TextArea>
                <p style={{ textTransform: 'uppercase', fontSize: '1.5rem' }} >Comedy <br/> Special</p>
                <Row>
                    <p><MdiMapMarkerOutline style={{ fontSize: '0.9rem'}}/> Location</p>
                    <Button>
                        <ButtonContent>$299</ButtonContent>
                        <ButtonLabel isPrimary={props.isPrimary}><CharmShoppingBag/></ButtonLabel>
                    </Button>
                </Row>
            </TextArea>
        </Card>
    )
}

EventCardMobile.propTypes = {
};
