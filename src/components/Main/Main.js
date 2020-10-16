import React from 'react';
import './main.css';

const video = {
  'Falcon 1': 'moon',
  'Falcon 9': 'earth',
  'Falcon Heavy': 'mars',
  other: 'space',
};

export default function Main({ rocket }) {
  return (
    <section className="main">
      <h1 className="title">
        {rocket ? rocket : 'SpaceX Calendar'}
      </h1>
      {rocket && <div className="video-container">
        <video 
          className="video" 
          autoPlay loop muted 
          src={`./video/${video.hasOwnProperty(rocket) ? video[rocket] : video.other}.mp4`} />
      </div>}
    </section>
  )
}

