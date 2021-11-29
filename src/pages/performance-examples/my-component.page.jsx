import React, {useMemo, useCallback} from 'react';
import MyChildComponent from './my-child-component';

const MyComponent = React.memo(
    ({width, onChildClose}) => {
        const childStyle = useMemo(
            () => ({color: "white", width}), 
            [width]
        );

        const closeChild = useCallback(
            () => {
                console.log("I am closing");
                onChildClose();
            }, 
            [onChildClose]
        );

        return (
            <MyChildComponent 
                title="this is a title"
                /* If we had passed {color: 'white', width} in the style prop instead, 
                a new object would be generated every time MyComponent renders and the 
                Memo(child) would not work be able to detect that nothing has changed" */       
                style={childStyle} 
                hasFamily
                onClose={closeChild}
            />
        );
    }
);

export default MyComponent;
