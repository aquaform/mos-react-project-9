import React, { useState } from "react";
import styled from "styled-components";

const Info = styled.div`
  margin-left: 10px;
`
const Title = styled.h2`
  font-size: 30px;
`
const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`
const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid var(--light-gray);
  padding: 5px 20px;
  min-width: 50px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  margin-left: 10px;
  
  &:active {   
    box-shadow: 0 0 rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`

const Total = styled.h3`
  font-size: 16px;
`

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="item">
      <img src={info.image} alt={info.name} />
      <Info>
        <Title>{info.name}</Title>
        <p>{info.desc}</p>
      </Info>
      <Quantity>
        <Button
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </Button>
        <Total className="item-total">{total ? total : ""}</Total>
        <Button className="item-more" onClick={handleAddClick}>
          +
        </Button>
      </Quantity>
    </div>
  );
}

