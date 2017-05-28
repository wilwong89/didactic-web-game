import React from 'react'
import MemeImage from '../assets/meme.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img alt='This is a meme, because Bryan demanded it!' className='meme' src={MemeImage} />
  </div>
)

export default HomeView
