import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from "uuid";

const TaskAddButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    //タスクカードを追加
    setTaskCardsList([...taskCardsList, {
      id: taskCardId,
      draggableId: `item${taskCardId}`,
    }
    ])
  };
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton'
        onClick={addTaskCard}>+</button>
    </div>
  )
}

export default TaskAddButton
