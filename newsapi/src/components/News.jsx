import React, { useEffect, useState } from 'react'
import Newscard from './Newscard'

function News({category}) {
  const [newsData,setNewData]=useState([])
  const fetchNewsData = async ()=>{
    let response = await fetch(`https://newsdata.io/api/1/latest?category=${category}&country=in&language=en&apikey=pub_76063e591eea57cf3b379ecd5166be8bd9da7`)
    let data = await response.json()
    console.log(data)
    setNewData(data.results
    )
  }
  useEffect(()=>{
    fetchNewsData()
  },[category])
  return (
   <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
   <div className="container p-6 mx-auto space-y-8">
     <div className="space-y-2 text-center">
       <h2 className="text-3xl font-bold capitalize"> {category} News</h2>
       <p className="font-serif text-sm dark:text-gray-600">
         Qualisque erroribus usu at, duo te agam soluta mucius.
       </p>
     </div>
     <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
       {newsData.map((news , i)=>{
        return(
          <Newscard key={i} category={news.category} description={news.description} images={news.image_url} link={news.link} date={news.pubDate} 
          title={news.title}/>
        )
      })}
       
     </div>
   </div>
 </section>
  )
}

export default News