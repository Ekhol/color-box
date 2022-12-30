import React from 'react';

function Box({
    id,
    width = 6,
    height = 6,
    backgroundColor = "green",
    handleDelete
}) {
    const remove = () => handleDelete(id);
    return (
        <div>
            <div style={{ height: `${height}em`, width: `${width}em`, backgroundColor }} />
            <button onClick={remove}>Delete this box?</button>
        </div>
    );
}

export default Box;