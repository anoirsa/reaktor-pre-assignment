import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
  flex-direction: column;
  color: rgb(0, 0, 0);
  margin-right: 10px;
  & > p {
    font-size: 12px;
    font-weight: 200;
    color: black;

    & > span {
     color: black;  
      font-weight: 600;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <p>
        <span>Email: </span>anouarbelilawoo@outlook.com
      </p>
      <p>
        <span>Phone number: </span>+3584578718382
      </p>
    </Container>
  );
};

export default Contact;
