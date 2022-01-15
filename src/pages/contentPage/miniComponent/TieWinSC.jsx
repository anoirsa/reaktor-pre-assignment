import styled from "styled-components/macro";
import { CUSTOMS } from "../../../globals/GlobalStyles";


export const WinnerBox = styled.div`
    width: 80px;
    height: 20px;
    ${CUSTOMS.customCenter}
    border-radius: 4px;
    background: #ca1616;
    margin-left: 10px;
    & > p {
        color: #ffff;
        font-size: 12px;
    }
`;

export const TierBox = styled.div`
    width: 80px;
    height: 20px;
    ${CUSTOMS.customCenter}
    border-radius: 4px;
    background: #088f30;
    margin-left: 10px;
    & > p {
        color:#ffff;
        font-size: 12px;
    }
`;