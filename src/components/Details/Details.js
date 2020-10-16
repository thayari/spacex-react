import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Main from '../Main/Main';
import FetchData from '../../service/FetchData';
import './details.css';

const fetchData = new FetchData();

export default function Details(props) {
  const id = props.match.params.id;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getLaunches()
      .then(data => data.find(item => item.id === id))
      .then(data => {
        setData(data);
        console.log(data);
      })
  }, []);

  if (!data.links) return null;

  const videoId = data.links.webcast.split('=')[1];

  return (
    <>
      <Main />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={data.links.patch.small} alt="" />
            </div>
            {data.details && <div className="details-content">
              <p className="details-description">{data.details}</p>
            </div>}
          </div>
          <div>
            <iframe className="details-youtube" width="560" height="315" src={'https://www.youtube.com/embed/' + videoId} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <Link to='/calendar' className="button button-back">go back</Link>
      </main>
    </>
  )
}
