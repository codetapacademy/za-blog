import React, { useEffect, useState } from 'react'
import { Footer } from '../footer'
import axios from 'axios'

const App = () => {
  const [contentList, setContentList] = useState([])
  useEffect(
    () => {
      const getResult = async() => {
        const { data } = await axios.get(`http://localhost:3750/content`)
        setContentList(data)
      }
      getResult()
    },
    []
  )

  return (
    <div>
      <h1>Moare ma-ta</h1>
      <div>
        {contentList.map(content => {
          return (
            <div style={{marginTop: "4rem"}}>
              <h2>{content.author.firstName} {content.author.lastName}</h2>
              <h3>{content.author.jobTitle}</h3>
              <div>
                <img src={content.author.avatar} alt={content.author.jobTitle}/>
              </div>
              <p>{new Date(content.author.publishedDate).toDateString()}</p>
              <h4>{content.content.title}</h4>
              {content.content.description.map(description => {
                return <p>{description}</p>
              })}
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export { App }
