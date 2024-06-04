import React from 'react'

export default function Que7() {
  return (
    <>
    <h3>Que 7: How to install React Js on Windows, linux Operating System? How
to install NPM and How to check version of NPM?</h3>
    <h4>Answer:</h4>

    <h3>Installing React.js on Windows</h3>
    <ol>
        <li>Install Node.js and npm:
            <ul>
                <li>Go to the <a href='https://nodejs.org/en'>Node.js</a> website and download the installer.</li>
            <li>Run the installer and follow the instructions.</li>
            <li>Check if Node.js and npm are installed by opening Command Prompt and typing:</li>
            </ul>
            <p>node -v <br /> npm -v </p>
        </li>
        <li>Create a React app:
            <ul>
            <li>Open Command Prompt.</li>
            <li>Type these commands to create a new React app and start it:</li>
            </ul>
            <p>npx create-react-app my-app <br /> cd my-app <br /> npm start <br /> </p>
        </li>
    </ol>

    <hr />
    </>
  )
}
