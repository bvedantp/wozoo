import React from "react";
import { styled } from "styled-components";
import LineMdGrid3Filled from '~icons/line-md/grid-3-filled'
import GenreIconMobile from "./GenreIconMobile";

const Container = styled.div`
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
    font-size: 1rem;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
const HorizontalAlign = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    /* overflow-x: auto; */

    /* height: 220px; //to remove scrollbar */
`

export default function BrowseGenreMobile() {
    
    return (
        <Container>
            <Box>
                <Heading><LineMdGrid3Filled style={{ backgroundColor: 'yellow', borderRadius: '50%', padding: '5px', fontSize: '30px' }}/> BROWSE EVENTS</Heading>
                <HorizontalAlign>
                    <GenreIconMobile type={'music'}/>
                    <GenreIconMobile type={'funny'} />
                    <GenreIconMobile type={'theatre'} />
                    <GenreIconMobile type={'festival'} />
                    <GenreIconMobile type={'business'} />
                    <GenreIconMobile type={'music'} />
                    <GenreIconMobile type={'music'} />
                    <GenreIconMobile type={'music'} />
                </HorizontalAlign>
            </Box>
        </Container>
    );
}