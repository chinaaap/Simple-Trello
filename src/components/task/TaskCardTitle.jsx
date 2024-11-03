import React, { useState } from 'react'

const TaskCardTitle = () => {
    const [isClick, setIsClick] = useState(false);
    const [inputTitle, setInputTitle] = useState("Today");
    const handleClick = () => {
        setIsClick(true);
    };
    const handleChange = (e) => {
        setInputTitle(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClick(false);
    }
    const handleBlur = () => {
        setIsClick(false);
    };
    return (
        <div onClick={handleClick} className='taskCardTitleInputArea'>
            {isClick ? (
                <form onSubmit={handleSubmit}>
                    <input className='taskCardTitleInput'
                        autoFocus
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={inputTitle}
                        maxLength="15" />
                </form>)
                : (<h3>{inputTitle}</h3>)}
        </div>
    )
}

export default TaskCardTitle
