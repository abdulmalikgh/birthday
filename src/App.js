import React from 'react'
import List from './List'
import data from './data'
import { useState } from 'react'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="container">
      <h3> {people.length} birthdays today</h3>
     <List people={people} />
     <button onClick={() => setPeople([])}>
       Clear All
     </button>
     
    </div>
  );
}

export default App;
