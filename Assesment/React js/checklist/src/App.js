import React from 'react';
import Checklist from './Componants/Checklist';
import { ChecklistProvider } from './Componants/ChecklistContext';

function App() {
  return (
    <ChecklistProvider>
      <div className="App">
        <h1>Checklist</h1>
        
        <Checklist />
      </div>
    
    </ChecklistProvider>
  );
}

export default App;
