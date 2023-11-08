import React from "react";
import styled from "styled-components";
import Marquee from "./Marquee";
import { motion } from "framer-motion";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  color: white;
  background: rgb(0,0,0);
  background: linear-gradient(56deg, rgba(0,0,0,1) 0%, rgba(59,47,124,1) 100%);
`;

const CenterArea = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10%;
    gap: 50px;

    .title {
        font-size: 4.5vw;
        font-family: 'Dangsik', sans-serif;

        i {
            background: rgb(247,200,16);
            background: linear-gradient(180deg, rgba(247,200,16,1) 0%, rgba(228,84,103,1) 50%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: inline;
        }
    }

    .paragraph {
        font-size: 2vw;
        width: 90%;
        padding: 20px 0;
    }
`
const LeftBox = styled.div`
    width: 50%;
`
const RightBox = styled.div`
    width: 50%;
`
const SearchBar = styled(motion.div)`
    display: flex;
    align-items: center;
    width: 100%;

    .inputClass {
        background: #34254e;
        border: none;
        padding: 20px;
        border-radius: 10px 0 0 10px;
        color: white;
        font-size: 20px;
        font-family: 'OuickSand', sans-serif;
        font-weight: bold;
        width: 50%;

        &::placeholder {
            color: lightgray;
            font-weight: bold;
            opacity: 1; /* Override any browser default opacity */
        }

        /* For Internet Explorer 10-11 */
        &:-ms-input-placeholder {
            color: lightgray;
        }

        /* For Microsoft Edge */
        &::-ms-input-placeholder {
            color: lightgray;
        }
        
        &:focus {
            outline: none; // This removes the outline
        }
    }

    .buttonClass {
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 20px;
        font-family: 'OuickSand', sans-serif;
        background: rgb(247,200,16);
        background: linear-gradient(90deg, rgba(247,200,16,1) 0%, rgba(226,98,172,1) 100%);
        color: white;
        border: none;
        cursor: pointer;
    }
`
//framer animation definations
const container = {
  hidden: { opacity: 0 },
  visible: {
      opacity: 1,
      transition: {
          delay: 1,
          staggerChildren: 1,
      }
  }
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
      y: 0,
      opacity: 1,
      transition: {
          type: 'spring',
          stiffness: 100,
      }
  }
};


export default function TitlePage() {
  // Split the title into parts to preserve the <i> tag
  const words = ["Get a :", <i key="new-life"> NEW LIFE </i>];
  
  return (
    <Page>
      <Marquee />

      <CenterArea>
          <LeftBox>
                <motion.div
                  className="title"
                  style={{ overflow: "hidden", display: "flex", fontSize: "4vw" }} // Add styles directly or use styled components
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {words.map((word, index) => (
                    <motion.span
                      variants={child}
                      style={{ marginRight: "5px" }}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.p
                  className="paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  Explore fun areas near you and bring out the woobie in you.
                </motion.p>
          <SearchBar>
            <motion.input 
              className="inputClass" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 2, duration: 1 }} 
              type="text" 
              placeholder="Type 'fun'" />
            <motion.button 
              className="buttonClass" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 2, duration: 1 }}>
                Search
            </motion.button>
          </SearchBar>
        </LeftBox>
        <RightBox>img</RightBox>
      </CenterArea>
    </Page>
  );
}