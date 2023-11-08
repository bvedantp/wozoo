import React from "react";
import { styled } from "styled-components";
import ListItem from "./ListItem";
import WozooPay from "../assets/wozoo-pay.png";
import WozooConnect from "../assets/wozoo-connect.png";
import WozooFun from "../assets/wozoo-fun.png";
import WozooMagic from "../assets/wozoo-magic.png";

const Div = styled.div`
    display: flex;
    height: 70vh;
    padding: 50px;
`
const LeftPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    gap: 30px;
`
const RightPart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    gap: 30px;
`
const Heading = styled.h1`
    font-weight: 600;
    font-size: 1.5vw;
    margin-left: -12vw;
    
    i {
        background: linear-gradient(138deg, rgba(226,99,177,1) 0%, rgba(113,100,248,1) 100%);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text; /* For Safari */
    }
`

export default function WozooList() {
    
    return (
        <Div>
            <LeftPart>
                <Heading>Here's our Wozoo <i>Magic</i></Heading>
                <ListItem bgColor="#F3D112" theme="dark" image={WozooFun} title="FUN" text="Looking for fun near you?" />
                <ListItem bgColor="#E263B1" theme="light" image={WozooConnect} title="CONNECT" text="Find your vibe for yourself"/>
                <ListItem bgColor="#0061ED" theme="light" image={WozooPay} title="PAY" text="Fund the fun now, pay later!"/>
            </LeftPart>
            <RightPart>
                <img style={{ height: '100%' }} src={WozooMagic} />
            </RightPart>
        </Div>
    )
}