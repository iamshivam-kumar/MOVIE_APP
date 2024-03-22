import React from 'react'
import './playBtn.css'

const PlayBtn = ({movie}) => {
  return (
    <div>
    <div
      className={`trailer  d-flex align-items-center justify-content-center ${movie.active ? "active" : undefined}`}
    >
      <a href="/" className="playBtn">
        <ion-icon name="play-outline"></ion-icon>
      </a>
      <p>Watch Trailer</p>
      </div >
      
    </div>
  );
}

export default PlayBtn

