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
        width: 10vw;
        height: 10vw;
        font-size: 5vw;
        border-radius: 10px;

        p {
            font-family: 'Dangsik', sans-serif;
        }
`

const Duration = styled.p`
        color: yellow;
        text-transform: capitalize;
        font-size: 2vw;
`

export default function CountdownBlock(props) {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // Start the scale and count animations only if the component is in view
            controls.start({
                scale: 1,
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
            initial={{ scale: 0.3 }}
            animate={controls}
            whileInView={() => setIsInView(true)}
            viewport={{ once: true }}
        >
            <Square>
                <p>{count}</p>
                <Duration>{props.duration}</Duration>
            </Square>
        </motion.div>
    )
}

CountdownBlock.propTypes = {
    number: PropTypes.number.isRequired,
    duration: PropTypes.oneOf(['days', 'hours', 'mins', 'secs']).isRequired,
};