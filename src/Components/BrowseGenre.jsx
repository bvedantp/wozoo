import React from "react";
import { styled } from "styled-components";
import GenreIcon from "./GenreIcon";
import LineMdGrid3Filled from '~icons/line-md/grid-3-filled'

const Container = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
    gap: 20px;
`
const Box = styled.div`
    
`
const Heading = styled.h1`
    font-weight: 900;
    font-size: 1.5em;
    padding-left: 20px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
`
const HorizontalAlign = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    /* overflow-x: auto; */

    height: 220px; //to remove scrollbar
`

export default function BrowseGenre() {
    
    return (
        <Container>
            <Box>
                <Heading><LineMdGrid3Filled style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px', fontSize: '30px' }}/> BROWSE EVENTS BY GENRE</Heading>
                <HorizontalAlign>
                    <GenreIcon type={'music'}/>
                    <GenreIcon type={'funny'} />
                    <GenreIcon type={'theatre'} />
                    <GenreIcon type={'festival'} />
                    <GenreIcon type={'business'} />
                    <GenreIcon type={'music'} />
                    <GenreIcon type={'music'} />
                    <GenreIcon type={'music'} />
                </HorizontalAlign>
            </Box>
        </Container>
    );
}