import React, { useEffect, useState } from 'react';

const BoxList = (props) => {
    const {itemListDetails, onClickBox} = props;

    let boxes = itemListDetails.map((itemDetail) => {
        return <div className="elem box-list-elem" onClick={(e) => {onClickBox(itemDetail.item)}}>{itemDetail.item}</div>
    });

    return(
        <div className="box-list">
            {boxes}
        </div>
    )
};

export default BoxList;