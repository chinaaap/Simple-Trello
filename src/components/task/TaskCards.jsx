import React, { useState } from 'react'
import TaskCard from './TaskCard'
import TaskAddButton from './button/TaskAddButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskCardsList, startIndex, endIndex) => {
    // タスクを並び替える
    const remove = taskCardsList.splice(startIndex, 1);
    taskCardsList.splice(endIndex, 0, remove[0]);
};

const TaskCards = () => {
    const [taskCardsList, setTaskCardsList] = useState([{
        id: "0",
        draggableId: "item0",
    }]);
    const handleDragEnd = (result) => {
        reorder(taskCardsList, result.source.index, result.destination.index);
        setTaskCardsList(taskCardsList);
    };
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='droppable' direction='horizontal'>
                {(provided) => (
                    <div className='taskCardsArea'
                        {...provided.droppableProps}
                        ref={provided.innerRef} >
                        {taskCardsList.map((taskCard, index) => (
                            <TaskCard
                                key={taskCard.id}
                                index={index}
                                taskCardsList={taskCardsList}
                                setTaskCardsList={setTaskCardsList}
                                taskCard={taskCard} />
                        ))}
                        {provided.placeholder}
                        <TaskAddButton
                            taskCardsList={taskCardsList}
                            setTaskCardsList={setTaskCardsList} />
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskCards
