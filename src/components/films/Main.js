import React from 'react'
import { Films } from '../../shared/ListOfFilms'
import './Main.scss'
import { Link } from 'react-router-dom'
import SliderImage from '../slider-image/SliderImage'

export default function Main() {
  return (
    <div>
      <SliderImage />
      <h2>Watch Now</h2>
      <div className='film-container'>
        {Films.map((film) => (
          <div className='movie'>
            <img src={film.img} alt=''></img>
            <div className='movie-info'>
              <h3 className='title'><strong>{film.title}</strong></h3>
              <p className='rating'>{film.rating}</p>
            </div>
            <div>
              <Link className='button' to={`detail/${film.id}`}>Detail</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
