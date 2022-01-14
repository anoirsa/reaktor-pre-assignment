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
    & > h3 {
        font-size: 25px;
        font-weight:300;
    }
    & > p {
        font-size: 12px;
        margin-top: 10px;
        font-weight: 200;
        & > span {
            font-weight: 500;
        }
    }
`;

 
