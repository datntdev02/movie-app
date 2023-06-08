import React from 'react'
import './News.css'
import { Alert } from '@mui/material'
function News() {
  return (
    <div className='news-container'>
      <Alert severity="warning"><strong>Warning!!!</strong> This page will coming soon...</Alert>
      </div>
  )
}

export default News