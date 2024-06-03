import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function AddBlogs() {

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
    <>
    <Container className='p-5 mt-5 shadow'>
    <Link to="/"><button type='button' className='btn btn-sm w-25 ms-1 btn-info bg-info'>Go to Home</button></Link>
    <h3 className='mt-5'>Add Blogs</h3>
    <form onSubmit={addBlog}>
     <div className='input-group'>
        <input type='text' placeholder='New Task' className='form-control' reinpuf={blogInputRef} required />
     </div> 
     <br />
     <input type="text" placeholder='Description' reinpuf={blogDesRef} required />
      <br /><br />
      <input type="file" reinpuf={blogFileRef} /> 
     <div className='input-group mt-3'>
        <input type='submit' value="Add Task" className='btn btn-success btn-sm' />
     </div>    
    </form>

    <hr />
    {/* display task */}
    <h3>Manage All Blogs </h3>
    <input type='text' placeholder='Filter task' className='form-control' />
    <table className='table table-responsive border border-1 mt-3 p-4'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Description </th>
            <th>Action</th>
        </tr>
</thead>

<tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{}</td>
              <td>{blog.description}</td>
            <td><button type='button' className='btn btn-danger text-white bg-danger' onClick={() => deleteBlog(blog.id)}><span className='bi bi-trash'></span></button>

            <button type='button' className='btn btn-info bg-info text-white ms-2' onClick={() => updateBlog(blog.id, 'New Name')}><span className='bi bi-pencil'></span></button>
            
            </td>
        </tr>
      ))}
        </tbody>
    </table>

    </Container>

      
    </>
  )
}
