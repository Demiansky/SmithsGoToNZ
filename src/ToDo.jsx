import React, { useState } from 'react';
import './ToDo.css';
// Import your stress meter GIF - update path as needed
import stressMeterVeryLow from './assets/stress-meter-1.gif';
import stressMeterLow from './assets/stress-meter-2.gif';
import stressMeterMedium from './assets/stress-meter-3.gif';
import stressMeterHigh from './assets/stress-meter-4.gif';
import stressMeterVeryHigh from './assets/stress-meter-5.gif';

function ToDo() {
  // Sample tasks for moving to New Zealand
  const [tasks, setTasks] = useState([
    { id: 1, text: "Research visa requirements", completed: true, weight: 10 },
    { id: 2, text: "Acquire all relevant visa documents", completed: true, weight: 10 },
    { id: 3, text: "Get visa pre-approval letter", completed: true, weight: 10 },
    { id: 4, text: "Tune resume and Linked in for NZ job market", completed: true, weight: 15 },
    { id: 5, text: "Start applying for jobs", completed: true, weight: 20 },
    { id: 6, text: "Snag job!", completed: false, weight: 100 },
    { id: 7, text: "Clear out U.S. house for sale", completed: true, weight: 40 },
    { id: 8, text: "List U.S. house for sale", completed: false, weight: 30 },
    { id: 9, text: "Sell U.S. house", completed: false, weight: 40 },
    { id: 10, text: "Cry a bit over selling house", completed: false, weight: 20 },
    { id: 11, text: "Research Kiwi Culture", completed: true, weight: 15 },
    { id: 12, text: "Learn Kiwi Slang", completed: false, weight: 10 },
    { id: 13, text: "Hype Ellie and Maya for move", completed: true, weight: 30 },
    { id: 14, text: "Check shipping costs for belongings", completed: true, weight: 10 },
    { id: 15, text: "Research cities and communities", completed: true, weight: 15 },
    { id: 16, text: "Set up bank account in NZ", completed: false, weight: 10 },
    { id: 17, text: "Look into healthcare options", completed: true, weight: 10 },
    { id: 18, text: "Research schools for the kids", completed: true, weight: 10 },
    { id: 19, text: "Find pet transport services", completed: true, weight: 5 },
    { id: 20, text: "Ship Honey the Cat", completed: false, weight: 15 },
    { id: 21, text: "Book flights to New Zealand", completed: false, weight: 10 },
    { id: 22, text: "Say farewell to family", completed: false, weight: 30 },
    { id: 23, text: "Board Flight to NZ!", completed: false, weight: 10 },
    { id: 24, text: "Arrange temporary accommodation in NZ", completed: false, weight: 20 },
    { id: 25, text: "Set up utilities in new home", completed: false, weight: 10 }
  ]);

  // Calculate stress score from uncompleted tasks
  const stressScore = tasks
    .filter(task => !task.completed)
    .reduce((total, task) => total + task.weight, 0);

  const getStressMeterGif = () => {
    if (stressScore <= 100) {
      return stressMeterVeryLow;
    } else if (stressScore <= 200) {
      return stressMeterLow;
    } else if (stressScore <= 300) {
      return stressMeterMedium;
    } else if (stressScore <= 400) {
      return stressMeterHigh;
    } else {
      return stressMeterVeryHigh;
    }
  };  

  React.useEffect(() => {
    // Preload all stress meter images to prevent flashing/layout shifts
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };
    
    preloadImage(stressMeterVeryLow);
    preloadImage(stressMeterLow);
    preloadImage(stressMeterMedium);
    preloadImage(stressMeterHigh);
    preloadImage(stressMeterVeryHigh);
  }, []);

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
        {/* New outer container */}
        <div className="todo-box-container">
          {/* Add this new text box at the top */}
          <div className="todo-title-box">
            <h2>Do you know what I love to do to unwind after a stressful day at work? 
              NOT plan a move to New Zealand!  Below is our checklist of what we have and 
              have not done in our journey to migrate, as well as the intensity of our stress.  
              Feel free to play around with them to experiment with their impact on our stress and sanity!</h2>
          </div>

          {/* Content container for clipboard and stress meter */}
          <div className="todo-content-row">
            {/* Clipboard stays the same */}
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
                
            {/* Stress meter container */}
            <div className="stress-meter-container">
              <div className="stress-meter-inner">
                <img 
                  src={getStressMeterGif()} 
                  alt="Stress-O-Meter" 
                  className="stress-meter-image" 
                />
              </div>

              <div className="stress-score">
                <p>Current Stress Level: <span>{stressScore}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;