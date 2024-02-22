import './App.css';
import { useState, useEffect } from 'react';

const Person = (props) => {  
  //create another component called Person
  //each component have their own props object
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h2>Last Name : {props.lastName}</h2>
      <h2>Age : {props.age}</h2>
    </>
  )

}

const App = () => {
  const [counter, setCounter] = useState(() => {
    console.log('successful!');
    return 0
    //using function method will make it only did it one time
  });

  const [resourceType, setResourceType] = useState('posts');

  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //called somthing as a function, and start with 'use', we called it hook

  useEffect(() => {
    // setCounter(100);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType]) //[] make useEffect only run at the first time

  const handleResize = () => {setWindowWidth(window.innerWidth)};

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const name = null;
  return (
    <div className="App">
      <div>
        <div>{windowWidth}</div>
        <button onClick = {() => setResourceType('posts')}>Posts</button>
        <button onClick = {() => setResourceType('users')}>Users</button>
        <button onClick = {() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>

      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}

      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((nextCount) => nextCount + 1)}>+</button>
      <Person /> 
      <hr></hr>
      <Person name={'Joanne'} lastName={'Liu'} age={20} /> 
      <hr></hr>
      <Person name='Ricky' lastName='Cheng' age={21}/> 
      <hr></hr>
      <h1>Hello {name ? (
          <>
            {name}  
          </>
        ):(
          <>
            <h3>I Don't have the name</h3>
            <p>Name one for me, please.</p>
          </>
          //<>
          //   this is React fragments
          //</>
        )
      }</h1>
    </div>
  );
}

export default App;
