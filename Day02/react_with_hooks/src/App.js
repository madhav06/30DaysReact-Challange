
import React, {Component} from 'react';
import Products from './Products';
import Rating from './Rating';
import './App.css';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


// function formatName(user) {
//   return user.firstName + '' + user.lastName;
// }

function App() {

  const isValid =true;

  // const user ={
  //   firstName: 'Madhav',
  //   lastName: 'Nandan',
  //   imageUrl: 'https://picsum.photos/200/300'
  // };

  return (
    <div className="App">
    {/* <h2>
      Hello,{formatName(user)}
      <br />
      <img src={user.imageUrl}></img>
    </h2> */}
      
      <Products />
      {/* <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />
      <br/>
      <Button variant="danger" disabled={!isValid}>Default</Button> */}
    </div>
  );
}

export default App;
