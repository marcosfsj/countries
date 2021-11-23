import React from 'react';

const AddButton = ({lable, onClick}) => {
    return (
        <button onClick={onClick}>
            {`Add ${lable}`}
        </button>
    );
}

export default AddButton;