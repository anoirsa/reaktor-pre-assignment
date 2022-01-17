import styled from "styled-components/macro";
import { CUSTOMS } from "../../globals/GlobalStyles";
import { motion } from "framer-motion";


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
  color: white;
  & > h3 {
    font-size: 25px;
    font-weight: 300;
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

export const SliderArrow = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #080808;
  ${CUSTOMS.customCenter}
  margin-right: 10px;
  margin-left: 10px;
  transition: all 400ms ease-out;
  & > .fas {
    color: #ffff;
  }
  &:hover {
    opacity: 0.8;
  }

`;

export const GamesSection = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 20px;
  ${CUSTOMS.customCenter}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
  ${CUSTOMS.customCenter}
  //justify-content: flex-start;
`;
export const GamesTitle = styled.div`
  width: 100%;
  ${CUSTOMS.customCenter}
  margin-top:20px;
  justify-content: ${({ starting }) => (starting ? "flex-start" : "flex-end")};
  color: #ffff;
  & > h4 {
    font-weight: 300;
    margin-left: ${({ starting }) => (starting ? "20px" : "0")};
    margin-right: ${({ starting }) => (starting ? "0" : "20px")};
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 20px;
  transform: ${({ ending }) => ending && "rotate(180)"};
`;

export const ArrowSection = styled.div`
  ${CUSTOMS.customCenter};
  transform: ${({ starting }) => !starting && "rotate(180)"};
`;

export const BeginBox = styled(motion.div)`
  height: 90%;
  width: 12%;
  border: 2px solid black;
  margin-left: 10px;
  border-radius: 4px;
  ${CUSTOMS.customCenter}
  background: #e2e0e0;
  flex-direction: column;
  overflow: hidden;
  transition: all 340ms ease-out;
  & > .player--div {
    width: 95%;
    height: 28px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: black;
    border-radius: 4px;
    ${CUSTOMS.customCenter}
    & > p {
      font-size: 11px;
      color: #ffff;
    }
  }
  & > .game--id {
    font-size: 10px;
    color: #4d4a4a;
  }
  & > .icon--divs {
    ${CUSTOMS.customCenter}
  }
`;


export const EndBox = styled(motion.div)`
  height: 90%;
  width: 24%;
  border: 2px solid black;
  margin-left: 10px;
  border-radius: 4px;
  ${CUSTOMS.customCenter}
  flex-direction: column;
  
  background: #e2e0e0;
  & > .play--section {
    width: 94%;
    height: 28px;
    margin-bottom: 10px;
    ${CUSTOMS.customCenter}
    justify-content: flex-start;
    & .player--name {
      height: 95%;
      width: 60%;
      background: black;
      border-radius: 4px;
      ${CUSTOMS.customCenter}
      & > p {
        font-size: 11px;
        color: #ffff;
      }
    }
  }
  & > .game--id {
    font-size: 10px;
    color: #4d4a4a;
  }
`;
export const PlayedIcon = styled.img`
    width: 28px;
    height: 28px;
    margin-left: 5px;
`
