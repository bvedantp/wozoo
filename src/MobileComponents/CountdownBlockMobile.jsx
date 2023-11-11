import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { styled } from "styled-components";
import { motion, useAnimation } from "framer-motion";

const Square = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #E263B2;
        width: 60px;
        height: 60px;
        /* padding: 10px; */
        font-size: 2rem;
        /* border-radius: 10px; */
        transition: scale 200ms;

        p {
            font-family: 'Dangsik', sans-serif;
        }
`

const Duration = styled.p`
        color: yellow;
        text-transform: capitalize;
        font-size: 0.7rem;
`

export default function CountdownBlockMobile(props) {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // Start the scale and count animations only if the component is in view
            controls.start({
                scaleY: 1,
                transition: {
                    duration: 0.8,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                },
            });

            const intervalId = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount < props.number) {
                        return prevCount + 1;
                    } else {
                        clearInterval(intervalId);
                        return props.number;
                    }
                });
            }, (1000 / props.number));

            return () => clearInterval(intervalId);
        }
    }, [isInView, props.number]);

    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={controls}
            whileInView={() => setIsInView(true)}
            viewport={{ once: true }}
        >
            <Square className={props.className ? props.className : ''}>
                <p>{count}</p>
                <Duration>{props.duration}</Duration>
            </Square>
        </motion.div>
    )
}

CountdownBlockMobile.propTypes = {
    number: PropTypes.number.isRequired,
    duration: PropTypes.oneOf(['days', 'hours', 'mins', 'secs']).isRequired,
};