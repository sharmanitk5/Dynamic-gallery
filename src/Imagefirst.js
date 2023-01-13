import React from 'react'

export default function Imagefirst({imageurl}) {


    




  return (
    <div className='container'>

{
imageurl.map((x)=><img src={x.url}></img>)
      }
  
  </div>
  );
};
