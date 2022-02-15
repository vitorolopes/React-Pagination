import React,{useState,useEffect} from 'react'

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  console.log(data);

  const fetchUsers = async () => {
    const res = await fetch(url)
    const data = await res.json()  
//! HERE Transform data array into an array of arrays
    const cardsPerPage = 10
    const numberOfPages = Math.ceil(data.length/cardsPerPage)
    const newData = Array.from({length: numberOfPages}, (_, index)=>{
        const start = index * cardsPerPage
        console.log(start);
        return data.slice(start, start + cardsPerPage)
    })

    setData(newData)
    setLoading(false)
  }


  useEffect(() => {
    fetchUsers()
  }, [])
  
  return (
    {loading, data}
  )
}

export default useFetch

