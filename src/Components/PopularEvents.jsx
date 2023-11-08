import React from "react";
import { styled } from "styled-components";
import EventCard from "./EventCard";
import MajesticonsTrendingUpLine from '~icons/majesticons/trending-up-line'
import LineMdArrowLeftCircle from '~icons/line-md/arrow-left-circle'
import PropTypes from 'prop-types';

const Base = styled.div`
    height: 70vh;
    background-color: ${props => props.background ? props.background : 'white'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
`;
const Container = styled.div`
    position: relative;
`
const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 2em;
    color: ${props => props.titleColor ? props.titleColor : 'black'};
    align-self: flex-start;
    margin-bottom: 20px;
`;
const Circle = styled.span`
    background-color: ${props => props.circleColor ? props.circleColor : '#F2D212'};
    color: ${props => props.circleContrast ? props.circleContrast : '#8160E9'};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const EventRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    width: 88vw;
    overflow-x: scroll;

    /* Hide scrollbar for Chrome, Safari, and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for Firefox */
    scrollbar-width: none;
    -ms-overflow-style: none; /* IE and Edge */
`;

const LeftScrollButton = styled.button`
    position: absolute; 
    left: -100px; 
    bottom: 45%; 
    margin-top: auto; 
    margin-bottom: auto;
    border-radius : 50%;
    width: 50px;
    height: 50px;
    font-size: 40px;
    padding: 0;
    background-color: ${props => props.isWhiteButton ? 'white' : '#F2D212'};
    color: #8160E9;
    cursor: pointer;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
`
const RightScrollButton = styled.button`
    position: absolute; 
    right: 10px;
    rotate: 180deg; 
    bottom: 45%; 
    margin-top: auto; 
    margin-bottom: auto;
    border-radius : 50%;
    width: 50px;
    height: 50px;
    font-size: 40px;
    padding: 0;
    background-color: ${props => props.isWhiteButton ? 'white' : '#F2D212'};
    color: #8160E9;
    cursor: pointer;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
`

export default function PopularEvents(props) {
    const eventRowRef = React.useRef(null);
    const scrollAmount = 800;  // adjust this value to scroll more or less

    const scrollLeft = () => {
        if (eventRowRef.current) {
            const newScrollPosition = eventRowRef.current.scrollLeft - scrollAmount;
            eventRowRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };
    
    const scrollRight = () => {
        if (eventRowRef.current) {
            const newScrollPosition = eventRowRef.current.scrollLeft + scrollAmount;
            eventRowRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Base background={props.background}>
            <Container>
                <LeftScrollButton isWhiteButton={props.isWhiteButton} onClick={scrollLeft}>
                    <LineMdArrowLeftCircle/>
                </LeftScrollButton>
                <Title titleColor={props.titleColor}>
                    <Circle circleColor={props.circleColor} circleContrast={props.circleContrast}><MajesticonsTrendingUpLine/></Circle> POPULAR EVENTS
                </Title>
                <EventRow ref={eventRowRef}>
                    <EventCard imageHeight={props.imageHeight}/>
                    <EventCard imageHeight={props.imageHeight}/>
                    <EventCard imageHeight={props.imageHeight}/>
                    <EventCard imageHeight={props.imageHeight}/>
                    <EventCard imageHeight={props.imageHeight}/>
                    <EventCard imageHeight={props.imageHeight}/>
                    <EventCard imageHeight={props.imageHeight}/>
                    <EventCard imageHeight={props.imageHeight}/>
                </EventRow>
                <RightScrollButton isWhiteButton={props.isWhiteButton} onClick={scrollRight}>
                    <LineMdArrowLeftCircle/>
                </RightScrollButton>
            </Container>
        </Base>
    );
}


PopularEvents.propTypes = {
    background: PropTypes.string,
    titleColor: PropTypes.string,
    circleColor: PropTypes.string,
    circleContrast: PropTypes.string,
    imageHeight: PropTypes.string
};
