import React from 'react';
import Draggable from 'react-draggable';

const DragBox = (props) => {
    const {itemListDetails} = props;

    const handleStart = (e) => {};
    const handleDrag = (e) => {};
    const handleStop = (e) => {};

    let boxes = itemListDetails.map((itemDetail, index) => {
        if(itemDetail.isDraggableItemVisible){
            return <Draggable
                axis="both"
                handle=".draggable-elem"
                scale={1}
                bounds="parent"
                defaultPosition={{x: (12*index + 20), y: 20}}
                onStart={handleStart}
                onDrag={handleDrag}
                onStop={handleStop}>
                    <div className="elem draggable-elem">{itemDetail.item}</div>
            </Draggable>
        }
    });

    return(
        <div className="draggable-area">
            {boxes}
        </div>
    );
};

export default DragBox;