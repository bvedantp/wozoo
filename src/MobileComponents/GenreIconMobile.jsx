import React from "react";
import { styled } from "styled-components";
import musicIcon from '../assets/icons/music.mp4';
import funnyIcon from '../assets/icons/funny.mp4';
import theatreIcon from '../assets/icons/theatre.mp4';
import festivalIcon from '../assets/icons/festival.mp4';
import businessIcon from '../assets/icons/business.mp4';

const Container = styled.div`
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const EventButton = styled.a`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    border: 3px solid #7b67fe50;
    /* margin-bottom: 10px; */
    cursor: pointer;
    transition: border 500ms;

    &:hover {
        border: 3px solid #7A67FE;
    }
`
const EventIcon = styled.video`
    width: 100%;
    height: 100%;
    border-radius: 10px;

    /* object-fit: cover; */
`
export default function GenreIconMobile(props) {
    const displayIcon = (() => {
        if (props.type === 'music') {
            return musicIcon;
        } else if (props.type === 'funny') {
            return funnyIcon;
        } else if (props.type === 'theatre') {
            return theatreIcon;
        } else if (props.type === 'festival') {
            return festivalIcon;
        } else if (props.type === 'business') {
            return businessIcon;
        }
    })();
        
    return (
        <Container>
            <EventButton href={`#${props.type}`}>
                <EventIcon autoPlay muted>
                    <source src={displayIcon} type="video/mp4" />
                </EventIcon>
            </EventButton>
            <p style={{ fontSize: '1em', fontWeight: 800, textTransform: 'capitalize' }}>{props.type}</p>
            <p style={{ fontSize: '0.8em', color: 'gray' }}>51 events</p>
        </Container>
    );
}