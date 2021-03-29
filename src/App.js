import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DragBox from './DragBox';
import BoxList from './BoxList';

const App = () => {
  const [itemListDetails, setItemListDetails] = useState([]);
  let items = ["item-1", "item-2", "item-3", "item-4"];

  useEffect(() => {
    let itemListDetailsObj = [];
    items.forEach((item , index) => {
        itemListDetailsObj.push({
            item,
            isDraggableItemVisible: false
        });
    });
    setItemListDetails(itemListDetailsObj);
  }, []);

  const onClickBoxListItem = (item) => {
    let itemListDetailsObj = Object.assign([], itemListDetails); 
    itemListDetailsObj.forEach((itemDetail) => {
      if(itemDetail.item === item){
        itemDetail.isDraggableItemVisible = true;
      }
    });

    setItemListDetails(itemListDetailsObj);
  };

  return (
    <div className="app">
      <BoxList itemListDetails={itemListDetails} onClickBox={onClickBoxListItem}/>
      <DragBox itemListDetails={itemListDetails}/>
    </div>
  );
};

export default App;
