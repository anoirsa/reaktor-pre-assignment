import styled from "styled-components/macro";
import { CUSTOMS } from "../../globals/GlobalStyles";



export const ContentContainer = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
    min-height: 670px;
`;

export const TitleSection = styled.div`
    width: 100%;
    margin-top: 20px;
    ${CUSTOMS.customCenter}
    flex-direction: column;
    color:white;
    & > h3 {
        font-size: 25px;
        font-weight:300;
    }
    & > p {
        font-size: 12px;
        margin-top: 5px;
        font-weight: 200;
        & > span {
            font-weight: 500;
        }
    }
`;

export const StartingGamesSection = styled.div`
    width: 100%;
    height:150px;
    margin-top: 20px;
    ${CUSTOMS.customCenter}
    
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 5px;
    ${CUSTOMS.customCenter}
    justify-content: flex-start;
`;
