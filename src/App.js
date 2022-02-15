import React, { Component } from 'react'
import Follower from './Follower';
import useFetch from './useFetch';


function App() {

  const {loading, data} = useFetch()
  console.log(data);
  return (
    <main>

      <div className="section-title">
        <h1 >{loading ? "loading" : "pagination"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {data[0].map((follower)=>{
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>

        <div className="btn-container">
          <button className='prev-btn'>Prev</button>
          {data.map((follower, index)=>{
            return(
              <button className="page-btn" key={index}>{index +1 }</button>
            )
          })}
          <button className='next-btn'>Next</button>
        </div>
      </section>

    </main>
    
  );
}

export default App;
