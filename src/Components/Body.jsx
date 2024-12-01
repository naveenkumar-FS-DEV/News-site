import { useEffect } from "react"
import { useState } from "react"
import { API_KEY } from "../Utils/Api"
import axios from "axios"
import Cards from "./Cards"
import Spinner from "./Spinner"

const Body = () => {

    let [news, setNews] = useState([])

    useEffect(() =>{
        fetchNews()
    },[])

   let fetchNews = async ()=>{
    let News = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`)
    setNews(News.data.articles)
   }

   if(news.length === 0){
    return <Spinner />
   }

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
      {news.map((allNews,index) =>(
        <Cards {...allNews} key={index}/>
      ))}
    </div>
  )
}

export default Body
