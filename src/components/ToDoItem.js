import React from 'react';



const ToDoItem = ({id , completed, text, toDo, setToDoList}) => {

    //events for deleting / ticking off item from list

    const deleteHandler = (id) => {
        //deleting item clicked using the filter function.
        setToDoList(toDo.filter(todo => todo.id !== id));

    }

    //creating a completion handler for completed tasks
    const completionHandler = (id) => {
        //update current list
        setToDoList(toDo.map((item) => {
            //loop over each item in the array.
            //check if id matches the item clicked.
            if(item.id === id) {
              return {
                  ...item,
                  completed : !item.completed
              };
            }
            return item;
            
            })
        );
    };

    return (
        <div className="todo">
            <li className={completed ? 'completed' : 'todo-item'}>{text}</li>
            <button onClick={() => completionHandler(id)} className="complete-btn" ><i className="fas fa-check"></i></button>
            <button onClick={() => deleteHandler(id)} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>

    );


}

export default ToDoItem;