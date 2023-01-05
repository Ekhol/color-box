import React, { useState } from 'react';
import uuid from 'react-uuid';

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const getInput = e => {
        e.preventDefault();
        createBox({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: "" });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }));
    };

    return (
        <div>
            <form onSubmit={getInput}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input onChange={handleChange} type="text" name="height" id="height" value={formData.height} />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input onChange={handleChange} type="text" name="width" id="width" value={formData.width} />
                </div>
                <div>
                    <label htmlFor='backgroundColor'>Background Color</label>
                    <input onChange={handleChange} type="text" name="backgroundColor" id="backgroundColor" value={formData.backgroundColor} />
                </div>
                <button id="newBoxButton">Add Box?</button>
            </form>
        </div>
    );
}

export default NewBoxForm;