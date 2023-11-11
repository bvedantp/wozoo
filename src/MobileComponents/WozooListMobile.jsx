import React from "react";
import { styled } from "styled-components";
import ListItemMobile from "./ListItemMobile";
import WozooPay from "../assets/wozoo-pay.png";
import WozooConnect from "../assets/wozoo-connect.png";
import WozooFun from "../assets/wozoo-fun.png";
import WozooMagic from "../assets/wozoo-magic.png";

const Div = styled.div`
    display: flex;
    /* height: 70vh; */
    padding: 50px;
`
const LeftPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 30px;
`
const Heading = styled.h1`
    font-weight: 600;
    font-size: 4.5vw;
    
    i {
        background: linear-gradient(138deg, rgba(226,99,177,1) 0%, rgba(113,100,248,1) 100%);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text; /* For Safari */
    }
`

export default function WozooListMobile() {
    
    return (
        <Div>
            <LeftPart>
                <Heading>Here's our Wozoo <i>Magic</i></Heading>
                <ListItemMobile bgColor="#F3D112" theme="dark" image={WozooFun} title="FUN" text="Looking for fun near you?" />
                <ListItemMobile bgColor="#E263B1" theme="light" image={WozooConnect} title="CONNECT" text="Find your vibe for yourself"/>
                <ListItemMobile bgColor="#0061ED" theme="light" image={WozooPay} title="PAY" text="Fund the fun now, pay later!"/>
            </LeftPart>
        </Div>
    )
}