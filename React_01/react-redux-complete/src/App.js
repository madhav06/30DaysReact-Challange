import React, { useState } from 'react';
import Coders from './Coders';
const list= [
  {name:'Rajyavardhan Singh Diwan', age:'30', contribution:'+124', ranking:'1090', key='1'},
  {name:'Mohit Rajput', age:'27', contribution:'+80', ranking:'3513', key='2'},
  {name:'Mohit Rajput',age:'22',contribution:'+147',ranking:'0996', key='3'}
]
const App = ({name,age,contribution,ranking  }) => {
 
  const [vals, setVals] = useState(list);
  console.log(name,age,contribution,ranking)
  return (
    <div className="App">
      <h1>My first react app</h1>
      <p>Welcome:)</p>
      <Coders list={setVals(vals)} />
      

    </div>
  );
}

export default App;
