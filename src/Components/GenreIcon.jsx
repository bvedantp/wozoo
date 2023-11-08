import React from "react";
import { styled } from "styled-components";
import musicIcon from '../assets/icons/cd.mp4';
import funnyIcon from '../assets/icons/drama.mp4';
import theatreIcon from '../assets/icons/theatre.mp4';
import festivalIcon from '../assets/icons/music.mp4';
import businessIcon from '../assets/icons/diagram.mp4';

const Container = styled.div`
    /* width: 10vw; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const EventButton = styled.button`
    padding: 20px;
    /* font-size: 3vw; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    /* width: 200px; */
    border-radius: 10px;
    border: 3px solid lightgray;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        border: 3px solid #69CACE;
    }
`
const EventIcon = styled.video`
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
`
export default function GenreIcon(props) {
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
            <EventButton>
            <EventIcon autoPlay muted>
                <source src={displayIcon} type="video/mp4" />
            </EventIcon>
            </EventButton>
            <p style={{ fontSize: '1.5em', fontWeight: 800, textTransform: 'capitalize' }}>{props.type}</p>
            <p style={{ color: 'gray' }}>51 events</p>
        </Container>
    );
}