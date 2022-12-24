import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import { Card } from "./interfaces/Card";
import Modal from "./components/Modal";
import useFetch from "./hooks/useFetch";
import useActiveItem from "./hooks/useItemActive";
import CardFilter from "./components/CardFilter";
import useFilter from "./hooks/useFilter";

function App() {
  const [tableData, updateData] = useFetch<Card[]>([],"http://127.0.0.1:8000/api/v1/cards/" );
  const [activeCardItem, updateActiveCardItem, removeActiveCardItem] =useActiveItem<Card>();
  const [cardFilter, updateFilterValue, updateFilterKey, updateFilterAll] = useFilter<Card>('balanse')

  const updateCardItemState = (newCardItem: Card) => {
    updateData(
      tableData.map((cart) =>
        cart.id === newCardItem.id ? { ...cart, ...newCardItem } : cart
      )
    );
  };

  const deleteCartItem = (idCard: number) => {
    updateData(tableData.filter(cart => cart.id !== idCard))
  }
  
  const closeModal = () => {
    removeActiveCardItem();
  };

  return (
    <div className="App">
      <div className="container">
        {activeCardItem ? (
          <Modal
            deleteCartItem={deleteCartItem}
            closeModal={closeModal}
            updateCardItemState={updateCardItemState}
            cardItem={activeCardItem}
          ></Modal>
        ) : (
          ""
        )}
        <CardFilter updateFilterAll={updateFilterAll}></CardFilter>
        <Table
          updateCardItem={updateActiveCardItem}
          tableData={cardFilter(tableData) }
        ></Table>
      </div>
    </div>
  );
}

export default App;
