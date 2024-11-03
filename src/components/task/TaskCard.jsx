import React, { useState } from 'react'
import TaskCardTitle from './TaskCardTitle'
import TaskDeleteButton from './button/TaskDeleteButton'
import Tasks from './Tasks'
import TaskAddInput from './input/TaskAddInput'
import { Draggable } from 'react-beautiful-dnd'

const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard, index }) => {
    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);
    return (
        <Draggable draggableId={taskCard.id} index={index}>
            {(provided) => (
                <div className='taskCard' ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <div className='titleAndDelete'
                        {...provided.dragHandleProps}>
                        <TaskCardTitle />
                        <TaskDeleteButton
                            taskCardsList={taskCardsList}
                            setTaskCardsList={setTaskCardsList}
                            taskCard={taskCard}
                        />
                    </div>
                    <TaskAddInput
                        inputText={inputText}
                        setInputText={setInputText}
                        taskList={taskList}
                        setTaskList={setTaskList} />
                    <Tasks
                        taskList={taskList}
                        inputText={inputText}
                        setTaskList={setTaskList} />
                </div>
            )
            }
        </Draggable >
    );
};

export default TaskCard
