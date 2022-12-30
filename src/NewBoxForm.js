import React, { useState } from 'react';
import uuid from 'uuid/v9';

function NewBoxForm({ createBox }) {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = e => {
        const { name, val } = e.target;
        setFormData(formData => ({
            ...formData, [name]: val
        }));
    };

    const input = e => {
        e.preventDefault();
        createBox({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: "" });
    };

    return (
        <div>
            <form onSubmit={input}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input onChange={handleChange} type="text" name='height' id='height' value={formData.height} />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input onChange={handleChange} type="text" name='width' id='width' value={formData.width} />
                </div>
                <div>
                    <label htmlFor='backgroundColor'>Background Color</label>
                    <input onChange={handleChange} type='text' name='backgroundColor' id='backgroundColor' value={formData.backgroundColor} />
                </div>
            </form>
        </div>
    );
}

export default NewBoxForm;