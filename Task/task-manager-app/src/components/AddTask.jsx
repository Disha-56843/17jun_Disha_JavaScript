import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef(null);

  // Function to fetch tasks from server
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Load tasks from server when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to add a new task
  const addTask = async (e) => {
    e.preventDefault();
    const newTaskName = taskInputRef.current.value;
    if (!newTaskName) return; // Prevent adding empty task

      const response = await axios.post('http://localhost:4000/tasks', { name: newTaskName });
      const newTask = response.data;
      setTasks([...tasks, newTask]);
      taskInputRef.current.value = ''; // Clear input after adding task
    
  };

  // Function to delete a task
  const deleteTask = async (taskId) => {
    
      await axios.delete(`http://localhost:4000/tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    
  };

  // Function to update a task
  const updateTask = async (taskId, newName) => {
    try {
      await axios.put(`http://localhost:4000/tasks/${taskId}`, { name: newName });
      setTasks(tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, name: newName };
        }
        return task;
      }));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h3>Task managing App</h3>
      <form onSubmit={addTask}>
        <div className='input-group'>
          <input type='text' placeholder='New Task' className='form-control' ref={taskInputRef} required />
        </div>
        <div className='input-group mt-3'>
          <input type='submit' value="Add Task" className='btn btn-success btn-sm' />
        </div>
      </form>

      <hr />
      {/* Display tasks */}
      <h3>Manage All Tasks</h3>
      <table className='table table-responsive border border-1 mt-3 p-4'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>
                <button type='button' className='btn btn-danger text-white bg-danger' onClick={() => deleteTask(task.id)}>
                <span className='bi bi-trash'></span>
                </button>
                <button type='button' className='btn btn-info bg-info text-white ms-2' onClick={() => updateTask(task.id, 'New Name')}>
                <span className='bi bi-pencil'></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


{/* <span className='bi bi-trash'></span>
<span className='bi bi-pencil'></span> */}