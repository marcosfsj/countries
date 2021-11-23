import React from 'react';

const TotalBubble = ({list}) => {
    return (
        <span>
            {`Total: ${list.length}`}
        </span>
    );
}

export default TotalBubble;