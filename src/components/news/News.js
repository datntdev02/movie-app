import React from 'react'
import './News.scss'
import { NewFilms } from '../../shared/ListOfNewsFilms'
import { ListNews } from '../../shared/ListOfNews'

function News() {
  return (
    <div className='news-container'>
      <h2>New Films</h2>
      <div className='new-films'>
        {NewFilms.map((newFilm) => (
          <div className='films'>
            <img src={newFilm.img} alt=''></img>
            <div className='films-info'>
              <h3 className='title'><strong>{newFilm.title}</strong></h3>
              <p className='date'>{newFilm.date}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>News</h2>
      <div className='news-content'>
        {ListNews.map((news) => (
          <div className='news'>
            <img src={news.img} alt=''></img>
            <div className='news-info'>
              <h3 className='title'><strong>{news.title}</strong></h3>
              <p className='description'>{news.description}</p>
              <p className='date'>{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News