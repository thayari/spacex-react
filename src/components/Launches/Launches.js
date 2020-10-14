import React from 'react';
import './launches.css';

export default function Launches(props) {
  return (
    <article className="launches">
        <div className="launches-image">
          <img src={props.image} alt="" />
        </div>
        <div className="launches-content">
          <h2 className="launches-title">
            <a href={props.link}>
              {props.text}
            </a>
          </h2>
          <a href="./details.html" className="button launches-details">Подробнее</a>
        </div>
      </article>
  )
}
