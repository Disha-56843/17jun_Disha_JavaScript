import React from 'react'
import HeaderComponent from './Que6/HeaderComponent'
import ContentComponent from './Que6/ContentComponent'

export default function Que6() {

    const appStyle = {
        fontFamily: 'Arial, sans-serif'
      };

  return (
    <div style={appStyle}>
    <h3>Que 6: What is Header and Content Components in React Js?</h3>
    <h4>Answer:</h4>

    <h4>Header Component</h4>

    <ul>
        <li>Purpose: The top part of the web page.</li>
        <li>Contents: Usually has the website's name, navigation links (like Home, About, Contact), and sometimes a search bar.</li>
        <li>Example:</li>
        <HeaderComponent />
    </ul>

    <h4>Content Component</h4>

    <ul>
        <li>Purpose: The main part of the web page where the primary information is displayed.</li>
        <li>Contents: Can include text, images, articles, or any other main content of the page.</li>
        <li>Example:</li>
        <ContentComponent />
    </ul>

    <p>Combination: These components are often put together in a main component like App to make the complete web page.</p>


    <hr />
    </div>
  )
}
