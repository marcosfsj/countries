import React from 'react';

const AddButton = ({handleOnClick}) => {
    return (
        <button onClick={handleOnClick}>
            {`Add`}
        </button>
    );
}

export default AddButton;