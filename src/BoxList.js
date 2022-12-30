import React, { useState } from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [boxes, handleBoxes] = useState([]);
    const add = boxObject => {
        handleBoxes(boxes => [...boxes, boxObject]);
    };
    const remove = id => {
        handleBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxDetails = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleDelete={remove}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <div>
            <NewBoxForm createBox={add} />
            {boxDetails}
        </div>
    );
}

export default BoxList;