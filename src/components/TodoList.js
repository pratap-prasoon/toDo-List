import React from 'react';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";



function TodoList(props) {
    return (
        <div>
             {/* <li> */}
                {props.text}
            {/* </li> */}
            <Button onClick = {props.clicked}>
                <DeleteIcon />
                </Button>
        </div>
    )
}

export default TodoList;
