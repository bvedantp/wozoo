import React from "react";
import { styled } from "styled-components";
import MajesticonsTrendingUpLine from '~icons/majesticons/trending-up-line'
import PropTypes from 'prop-types';
import EventCardMobile from "./EventCardMobile";

const Base = styled.div`
    padding: ${props => props.isPrimary ? '50px 25px 75px 25px' : '25px'};
    background-color: ${props => props.background ? props.background : 'white'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
`
const Container = styled.div`
    position: relative;

    &::after {
        background: ${props => props.isPrimary ? '' : 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'};
        content: "";
        height: 103%;
        position: absolute;
        width: 50px;
        z-index: 5;
        pointer-events: none;
    }
    
    &::after {
        right: -2%;
        top: 0;
        transform: rotateZ(180deg);
    }

`
const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1.2rem;
    color: ${props => props.titleColor ? props.titleColor : 'black'};
    align-self: flex-start;
    margin-bottom: 20px;
    text-transform: uppercase;
`
const Circle = styled.span`
    background-color: ${props => props.circleColor ? props.circleColor : '#F2D212'};
    color: ${props => props.circleContrast ? props.circleContrast : '#8160E9'};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const EventRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    width: 90vw;
    overflow-x: scroll;

    /* Hide scrollbar for Chrome, Safari, and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for Firefox */
    scrollbar-width: none;
    -ms-overflow-style: none; /* IE and Edge */
`


export default function PopularEventsMobile(props) {

    return (
        <Base id={props.type} background={props.background} isPrimary={props.isPrimary}>
            <Container isPrimary={props.isPrimary} >
                <Title titleColor={props.titleColor}>
                    <Circle circleColor={props.circleColor} circleContrast={props.circleContrast}><MajesticonsTrendingUpLine/></Circle> {props.type ? props.type : 'POPULAR'} EVENTS
                </Title>
                <EventRow>
                    <EventCardMobile isPrimary={props.isPrimary} />
                    <EventCardMobile isPrimary={props.isPrimary} />
                    <EventCardMobile isPrimary={props.isPrimary} />
                    <EventCardMobile isPrimary={props.isPrimary} />
                    <EventCardMobile isPrimary={props.isPrimary} />
                    <EventCardMobile isPrimary={props.isPrimary} />
                    <EventCardMobile isPrimary={props.isPrimary} />
                    <EventCardMobile isPrimary={props.isPrimary} />
                </EventRow>
            </Container>
        </Base>
    );
}


PopularEventsMobile.propTypes = {
    background: PropTypes.string,
    titleColor: PropTypes.string,
    circleColor: PropTypes.string,
    circleContrast: PropTypes.string,
};
