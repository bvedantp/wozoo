import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    font-size: 12vw;
    font-family: 'Dangsik', sans-serif;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 6px;
    -webkit-text-stroke-color: #ffffff;
    text-transform: uppercase;
  }
`;

const StarImg = styled(motion.img)`
  height: 10vw;
  width: 10vw;
`;

const marqueeVariants = {
  animate: {
    x: [1900, -200],
    transition: {
      x: {
        repeat: 0, // No repetition, run only once
        duration: 3,
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
      // delay: 1,
      duration: 5, // Duration of the rotation animation
      ease: [.12,-0.09,.53,1.12]
    }
  }
};

const Marquee = () => {
  const { scrollYProgress } = useScroll();
  const xRange = useTransform(scrollYProgress, [0, 1], [-200, -4000]);

  return (
    <MarqueeContainer>
    <Track
      variants={marqueeVariants}
      animate="animate"
      style={{ x: xRange }} // Apply the motion value here
    >
      <motion.h1>
        INFINITY <StarImg src={Star} variants={starVariants} initial="initial" animate="animate" /> BEYOND
      </motion.h1>
    </Track>
  </MarqueeContainer>
  );
};

export default Marquee;