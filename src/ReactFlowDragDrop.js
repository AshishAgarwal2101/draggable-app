import React, { useEffect, useState } from 'react';

import ReactFlow, {
    removeElements,
    addEdge,
    Controls,
    Background,
  } from 'react-flow-renderer';

const ReactFlowDragDrop = (props) => {
    const { itemListDetails } = props;
    const [elements, setElements] = useState([]);
    const [edges, setEdges] =  useState([]);

    useEffect(() => {
        let defaultElements = [];
        itemListDetails.forEach((itemDetail, index) => {
            if(itemDetail.isDraggableItemVisible){
                defaultElements.push({
                    id: itemDetail.item,
                    data: {label: itemDetail.item},
                    position: { x: 20, y: (50*index + 20) }
                });
            }
        });

        const edgeElements = Object.assign([], edges);
        defaultElements = defaultElements.concat(edgeElements);

        setElements(defaultElements);
    }, [itemListDetails]);

    useEffect(() => {
        const edgeElements = [];
        elements.forEach((element, index) => {
            if(element.id.includes("reactflow__edge")){
                edgeElements.push(element);
            }
        });

        setEdges(edgeElements);
    }, [elements]);

    const onElementsRemove = (elementsToRemove) => {
        setElements((els) => removeElements(elementsToRemove, els));
    }

    const onConnect = (edge) => {
        setElements((els) => addEdge(edge, els));
    }

    const saveFlow = (e) => {
        console.log("Elements ======> ", elements);
        //Use "elements" variable to save the flow
    };

    return (
        <>
            <div className="draggable-area">
                <ReactFlow
                    elements={elements}
                    onElementsRemove={onElementsRemove}
                    deleteKeyCode={46} /* 'delete'-key */
                    onConnect={onConnect} >
                        <Controls />
                        <Background color="#aaa" gap={16} />
                </ReactFlow>
            </div>
            <div className="save-flow" onClick={saveFlow}>
                SAVE THIS  FLOW
            </div>
        </>
    );
};

export default ReactFlowDragDrop;