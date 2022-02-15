import React,{useState,useEffect} from 'react'

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchUsers = async () => {
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    setData(data)
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