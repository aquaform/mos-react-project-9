import React, { useState, useEffect } from "react";
import Item from "./Item";
import styled from "styled-components"

const List = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;

`

const ItemList = styled.li`
  margin-bottom: 80px;  
`

export default function Shop() {
  const [items, setItems] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("https://covid-shop-mcs.herokuapp.com");
        const items = await data.json();
        setItems(items);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className="shop">
      <List>
        {items &&
          items.map((item) => (
            <ItemList key={item.id}>
              <Item info={item} />
            </ItemList>
          ))}
      </List>
    </div>
  );
}