import React, { Component } from 'react'
import Follower from './Follower';
import useFetch from './useFetch';


function App() {

  const {loading, data} = useFetch()

  return (
    <main>

      <div className="section-title">
        <h1 >{loading ? "loading" : "pagination"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {data.map((follower)=>{
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>
      </section>

    </main>
    
  );
}

export default App;


// Github API
// 100 users
// 10 users per page

// Routes? None
// Components
//    App.js
//    Follower.js
// context.js? No
// state values. Which and where.
//    loading
//    data
//    number of users/page || number of pages
//    page


// App.js (fetch data, map) --> Follower.js