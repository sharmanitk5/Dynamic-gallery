import logo from './logo.svg';
import './App.css';
import Imagefirst from './Imagefirst';
import { useEffect, useState } from 'react';

function App() {

  

 
  const [imagedata,setImageData] = useState([
{
    url:"https://source.unsplash.com/random/1"
},
{
    url:"https://source.unsplash.com/random/2"
},
{
    url:"https://source.unsplash.com/random/3"
},

{
    url:"https://source.unsplash.com/random/4"
},
{
    url:"https://source.unsplash.com/random/5"
},
{
    url:"https://source.unsplash.com/random/6"
}

]);
 

  function AddImages(){
    
   setImageData([...imagedata,{url:
    `https://source.unsplash.com/random/${Math.floor(Math.random()*100)}`}])
   

  }
  function RemoveImages(){
    
    setImageData(imagedata.slice(0,-1))
    
 
   }
   
  return (
    <div className="App">
      
      <div>
      <Imagefirst imageurl={imagedata}/>
      </div>
      <button onClick={RemoveImages}>Remove</button>
      <button onClick={AddImages}>Add</button>
    </div>
  );
}

export default App;
