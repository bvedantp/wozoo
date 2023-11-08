import React from "react";
import { keyframes, styled } from "styled-components";
import Namaste from "../assets/namaste.svg";
import BottomImage from "../assets/footer-image.png";

const animate = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

const Base = styled.div`
  position: relative;
  height: 70vh;
  background: linear-gradient(133deg, rgba(2,1,6,1) 0%, rgba(90,74,184,1) 100%);
  padding: 50px 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Circle = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${animate} 25s linear infinite;
  bottom: -150px;

  &:nth-child(1) {
    left: 25%;
    animation-delay: 0s;
  }

    &:nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    &:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    &:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    &:nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    &:nth-child(6){
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    &:nth-child(7){
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    &:nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    &:nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    &:nth-child(10){
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }
`;

const TopPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    height: 40%;
    gap: 5%;
    line-height: 1.5;
    
    img {
        width: 300px;
    }
    p {
        color: white;
        font-size: 1.5vw;
    }
`
const BottomPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    height: 40%;
    gap: 5%;
    line-height: 1.5;
    position: relative;
    
    img {
        position: absolute;
        bottom: 0;
        right: 10%;
        width: 600px;
    }
    p {
        color: white;
        font-size: 1.5vw;
    }
`

export default function Footer() {

    return (
        <Base>
            {/* for square animation */}
            <Circle size={80} style={{ left: '25%', animationDelay: '0s' }} />
            <Circle size={20} style={{ left: '10%', animationDelay: '2s', animationDuration: '12s' }} />
            <Circle size={30} style={{ left: '35%', animationDelay: '0s' }} />
            <Circle size={60} style={{ left: '50%', animationDelay: '3s', animationDuration: '12s' }} />
            <Circle size={50} style={{ left: '15%', animationDelay: '5s' }} />
            <Circle size={90} style={{ left: '70%', animationDelay: '8s', animationDuration: '12s' }} />
            <Circle size={100} style={{ left: '95%', animationDelay: '1s' }} />
            <Circle size={10} style={{ left: '30%', animationDelay: '3s', animationDuration: '12s' }} />
            <Circle size={20} style={{ left: '45%', animationDelay: '9s' }} />
            <Circle size={40} style={{ left: '60%', animationDelay: '10s', animationDuration: '12s' }} />
            {/* end of animation */}
            <TopPart>
                <img src={Namaste} alt="Namaste" />
                <p>Who are we? <br />
                Think of Wozoo as that friend who's always on the same wavelength as you. We get your vibe, your energy, and your desire for unforgettable memories. And guess what? We're not just here to recommend experiences - we're here to matchmake you with the activities and hangout buddies that sync perfectly with your style.</p>
            </TopPart>
            <BottomPart>
                <button>Know More</button>
                <img src={BottomImage} alt="FooterImg" />
            </BottomPart>
        </Base>
    )
}