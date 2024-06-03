import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import AddBlogs from './components/AddBlogs.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
// import DeleteTask from './components/deletetask.jsx'
// import TaskManager from './components/AddTask.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/addblogs" element={<AddBlogs />} />
        {/* <Route path="/addtask" element={<TaskManager />} />
        <Route path="/deletetask" element={<DeleteTask />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
