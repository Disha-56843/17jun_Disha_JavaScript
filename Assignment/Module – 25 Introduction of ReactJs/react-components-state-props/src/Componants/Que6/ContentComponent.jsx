import React from 'react'

export default function ContentComponent() {
    const mainStyle = {
        padding: '20px',
        backgroundColor: '#ffffff'
      };
    
      const headingStyle = {
        color: '#343a40'
      };
    
      const paragraphStyle = {
        color: '#6c757d'
      };
    
      return (
        <main style={mainStyle}>
          <h2 style={headingStyle}>Welcome to Our Website</h2>
          <p style={paragraphStyle}>This is where the main content of the page goes.</p>
        </main>
  )
}
