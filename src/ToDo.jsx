import React, { useState } from 'react';
import './ToDo.css';
// Import your stress meter GIF - update path as needed
import stressMeterGif from './assets/stress-meter.gif';

function ToDo() {
  // Sample tasks for moving to New Zealand
  const [tasks, setTasks] = useState([
    { id: 1, text: "Research visa requirements", completed: false },
    { id: 2, text: "Check shipping costs for belongings", completed: false },
    { id: 3, text: "Research Wellington neighborhoods", completed: false },
    { id: 4, text: "Set up bank account in NZ", completed: false },
    { id: 5, text: "Look into healthcare options", completed: false },
    { id: 6, text: "Research schools for the kids", completed: false },
    { id: 7, text: "Find pet transport services", completed: false },
    { id: 8, text: "List U.S. house for sale", completed: false },
    { id: 9, text: "Book flights to New Zealand", completed: false },
    { id: 10, text: "Plan farewell party", completed: false },
    { id: 11, text: "Set up utilities in new home", completed: false },
    { id: 12, text: "Arrange temporary accommodation in NZ", completed: false },
    { id: 13, text: "Get travel insurance", completed: false },
    { id: 14, text: "Notify schools about moving", completed: false },
    { id: 15, text: "Prepare for culture shock", completed: false }
  ]);
  
  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  return (
    <div className="todo-container">
      <div className="todo-header">
        <div className="header-box">
          <h1>To Do List and Stress-Meter!</h1>
          </div>
      </div>
      
      <div className="todo-content">
        <div className="clipboard">
          <h2 className="clipboard-title">Smith Family Tasks</h2>
          <div className="clipboard-content">
            <ul className="todo-list">
              {tasks.map(task => (
                <li 
                  key={task.id} 
                  className={`todo-item ${task.completed ? 'completed' : ''}`}
                >
                  <input 
                    type="checkbox" 
                    className="todo-checkbox" 
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    id={`task-${task.id}`}
                  />
                  <label 
                    className="todo-label"
                    htmlFor={`task-${task.id}`}
                  >
                    {task.text}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Stress-o-meter that stays fixed */}
        <div className="stress-meter-container">
          <img 
            src={stressMeterGif} 
            alt="Stress-O-Meter" 
            className="stress-meter-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default ToDo;