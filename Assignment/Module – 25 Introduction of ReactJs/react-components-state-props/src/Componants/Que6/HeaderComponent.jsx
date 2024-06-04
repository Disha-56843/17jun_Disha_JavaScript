import React from 'react'

export default function HeaderComponent() {

    const headerStyle = {
        backgroundColor: '#f8f9fa',
        padding: '10px 20px',
        borderBottom: '1px solid #dee2e6',
        color : "#000"
      };
    
      const navStyle = {
        display: 'flex',
        listStyleType: 'none',
        padding: 0
      };
    
      const navItemStyle = {
        marginRight: '15px'
      };

  return (
    <header style={headerStyle}>
      <h1>Website Title</h1>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}><a href="/">Home</a></li>
          <li style={navItemStyle}><a href="/about">About</a></li>
          <li style={navItemStyle}><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
