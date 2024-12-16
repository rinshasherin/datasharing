import React, { useState } from 'react'

function Child({ updateParentState }) {

    const [childInput, setChildInput] = useState("");

    const handleChange = (e) => {
        setChildInput(e.target.value);
        updateParentState(e.target.value); 
    };

    return (
        <>
            <div className='p-2 mb-3'>
                <h5>Child Component</h5>
                <input className='form-control' type="text" value={childInput} onChange={handleChange} placeholder="Type to update parent" />
            </div>
        </>
    )
}

export default Child