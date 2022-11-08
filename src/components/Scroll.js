import React from "react";


const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '10px solid red', height: '800px'}}>
            { props.children }
        </div>
    );
};


export default Scroll;