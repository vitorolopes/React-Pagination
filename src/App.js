import React, { useState } from 'react'
import Follower from './Follower';
import useFetch from './useFetch';


function App() {

  const {loading, data} = useFetch()

  const [page, setPage] = useState(0)

  const handlePrev = () => {
    setPage( oldPage => {
      if(oldPage === 0){
        return data.length - 1
      }
      return oldPage - 1 
    })
  }
  const handleNext = () => {
    setPage( oldPage => {
      if(oldPage === data.length - 1){
        return 0
      }
      return oldPage + 1 
    })
  }

  if(loading) return <h2>Loading</h2>

  return (
    <main>

      <div className="section-title">
        <h1 > pagination</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {data[page].map((follower)=>{
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>

        <div className="btn-container">
          <button className='prev-btn'
                  onClick={handlePrev}
          >
                Prev
          </button>

          {data.map((follower, index)=>{
            return(
              <button className={`page-btn ${index === page && "active-btn"}`}
                      key={index}
                      onClick={()=>setPage(index)}             
              >
                {index +1 }
              </button>
            )
          })}

          <button className='next-btn'
                  onClick={handleNext}
          >
                Next
          </button>

        </div>
      </section>

    </main>
    
  );
}

export default App;
