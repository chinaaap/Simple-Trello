import React from 'react'

const TaskDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    //タスクカードを削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button className='taskCardDeleteButton'
        onClick={() => taskCardDeleteButton(taskCard.id)}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}

export default TaskDeleteButton
