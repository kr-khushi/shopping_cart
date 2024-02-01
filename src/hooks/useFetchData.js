import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() =>{
        const fetchData = async() => {
            try {
                const res = await axios.get(url)
                // const json =  await res.json()
                // console.log("json",json)
                setData(res?.data)
                console.log(res?.data)
                console.log(res?.data[0].id)
                console.log(res?.data[0].category.name)
            } catch (error) {
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }

        fetchData()
    } , [url])


    return [data, loading, error]
}

export default useFetchData
 