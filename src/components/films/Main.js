import React from 'react'
import { Films } from '../../shared/ListOfFilms'
import './Main.css'
import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { Theme } from '../navigation/Navigation'

export default function Main() {
  // const { toggle } = useContext(Theme)
  return (
    // <div className={toggle ? 'primaryBg' : 'secondaryBg'}>
      <div>
        <div className='film-container'>
          {Films.map((film) => (
            <div className='movie'>
              <img src={film.img} alt=''></img>
              <div className='movie-info'>
                <h3 className='title'>{film.title}</h3>
                <p className='rating'>{film.rating}</p>
              </div>
              <div>
                <Link className='button' to={`detail/${film.id}`}>Detail</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </div>
  )
}
