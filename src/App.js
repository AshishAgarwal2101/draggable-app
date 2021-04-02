import React, { useEffect, useState } from 'react';
import './App.css';
import DragBox from './DragBox';
import BoxList from './BoxList';
import ReactFlowDragDrop from './ReactFlowDragDrop';

const App = () => {
  const [itemListDetails, setItemListDetails] = useState([]);
  let items = ["item-1", "item-2", "item-3", "item-4", "item-5", "item-6", "item-7", "item-8", "item-9", "item-10", "item-11", "item-12", "item-12", "item-14", "item-15", "item-16"];

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
      {/* <DragBox itemListDetails={itemListDetails} /> */}
      <ReactFlowDragDrop itemListDetails={itemListDetails} />
    </div>
  );
};

export default App;
