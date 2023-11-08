import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CountdownBlock from "./CountdownBlock";
import { motion } from "framer-motion";

const Page = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 40vh;
        color: white;
        background: #7A67FE;
        padding: 50px;
`

const Heading = styled.h4`
        font-size: 3em;
        font-family: 'Dangsik', sans-serif;
`

const TimerArea = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 40px;
`

export default function CountdownPage() {
    const launchDate = new Date("2024-01-08T00:00:00Z"); // Jan 8, 2024
    
    const [remainingTime, setRemainingTime] = useState(getRemainingTime());

    function getRemainingTime() {
        const currentTime = new Date();
        const difference = launchDate.getTime() - currentTime.getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(getRemainingTime());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Page>
            <Heading>We are launching in:</Heading>
            <motion.div
                // initial={{ scale: 0 }}
                // whileInView={{ scale: 1 }}
                viewport={{ once: true }}
            >
                <TimerArea>
                    <CountdownBlock number={remainingTime.days} duration="days" />
                    <CountdownBlock number={remainingTime.hours} duration="hours" />
                    <CountdownBlock number={remainingTime.minutes} duration="mins" />
                    <CountdownBlock number={remainingTime.seconds} duration="secs" />
                </TimerArea>
            </motion.div>
        </Page>
    );
}