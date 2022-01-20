import styled from "styled-components/macro";
import { CUSTOMS } from "../../../../globals/GlobalStyles";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: #00000096;
  z-index: 20;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${CUSTOMS.customCenter}
  overflow:visible;
`;

export const BoxTable = styled.div`
  background: #ffff;
  border-radius: 4px;
  border: 4px solid black;
  width: 80%;
  height: 90%;
  min-width: 900px;
  min-height: 630px;
  position: relative;
  ${CUSTOMS.customCenter}
  flex-direction: column;
  justify-content: flex-start;
  & > .icon {
    position: absolute;
    top: 6px;
    right: 7px;
    font-size: 30px;
    transition: all 300ms ease-out;
    &:hover {
      opacity: 0.6;
    }
  }
`;

export const ButtonSection = styled.div`
  width: 100%;
  ${CUSTOMS.customCenter}
  margin-top: 15px;
  gap: 20px;
`;

export const RowsSection = styled.div`
  width: 95%;
  height: 88%;
  border: 2px solid black;
  margin-top: 5px;
  border-radius: 5px;
`;

////

export const GameHistoricalContainer = styled.div`
  width: 100%;
  height: 100%;
  ${CUSTOMS.customCenter}
  flex-direction: column;
  gap: 8px;
`;

export const RowData = styled.div`
  width: 95%;
  height: 6%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-radius: 2px;
  ${CUSTOMS.customCenter}
  justify-content: flex-start;
`;
export const CellData = styled.div`
  width: ${({ myWidth }) => myWidth || "2px"};
  height: 90%;
  border-right: ${({ lastCell }) => (lastCell ? "none" : "2px solid black")};
  ${CUSTOMS.customCenter}
  //justify-content: flex-start;
    justify-content: ${({ choiceB }) => (choiceB ? "flex-end" : "flex-start")};
  & > p {
    margin-right: 6px;
    margin-left: 6px;
    font-size: 14px;
  }
`;

export const PlayedIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 5px;
`;

export const LastButtonSection = styled.div`
  width: 95%;
  ${CUSTOMS.customCenter}
  gap: 5px;
  justify-content: flex-end;
`;

export const SliderArrow = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background: #080808;
  ${CUSTOMS.customCenter}
  margin-right: 10px;
  margin-left: 10px;
  transition: all 400ms ease-out;
  & > .fas {
    color: #ffff;
  }
  &:hover {
    opacity: 0.6;
  }
`;
