import React from 'react'
import styled from 'styled-components/macro'
import Icon from '../../../images/devicon.png'

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    gap: 10px;
    border-radius: 4px;
    border: 2px solid black;
    margin-left: 10px;

`;

const Image = styled.img`
    width: 65px;
    height: 65px;
    border: 2px solid black;
    border-radius: 4px;
    object-fit: cover;
`;

const Text = styled.div`
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    & > p {
        color: black;
        font-weight: 300;
        font-size: 14px;
    }

`
const DevIcon = () => {
    return (
        <Container>
            <Image src={Icon} />
            <Text><p>Anouar</p>
                   <p>Reaktor Spring 2022</p> 
            </Text>
            
        </Container>
    )
}

export default DevIcon
