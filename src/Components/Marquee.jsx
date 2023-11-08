import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Star from "../assets/star.png";

const MarqueeContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 30vh;
  overflow: hidden;
`;

const Track = styled(motion.div)`
  position: absolute;
  white-space: nowrap;

  > h1 {
    margin: 20px 0;
    font-size: 14rem;
    font-family: 'Dangsik', sans-serif;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 6px;
    -webkit-text-stroke-color: #ffffff;
    text-transform: uppercase;
  }
`;

const StarImg = styled(motion.img)`
  height: 180px;
  width: 180px;
`;

const marqueeVariants = {
  animate: {
    x: [1900, -200],
    transition: {
      x: {
        repeat: 0, // No repetition, run only once
        duration: 5, // Run the animation for 5 seconds
        ease: [.17,.67,.66,1.02]
      },
    },
  },
};

const starVariants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360*5,
    transition: {
      delay: 1,
      duration: 4, // Duration of the rotation animation
      ease: [.12,-0.09,.53,1.12]
    }
  }
};

const Marquee = () => {
  return (
    <MarqueeContainer>
      <Track variants={marqueeVariants} animate="animate">
        <h1>
          INFINITY <StarImg src={Star} variants={starVariants} initial="initial" animate="animate" /> BEYOND
        </h1>
      </Track>
    </MarqueeContainer>
  );
};

export default Marquee;