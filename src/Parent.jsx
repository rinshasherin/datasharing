import React, { useState } from 'react'
import Child from './Child';

function Parent() {

    const [parentState, setParentState] = useState("");


    return (
        <>
            <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
                <h3>Parent-Child Component</h3>
                <Child updateParentState={setParentState} />
                <div>
                    <h5>Parent Component</h5>
                    <p>Child says: {parentState}</p>
                </div>
            </div>
        </>
    )
}

export default Parent