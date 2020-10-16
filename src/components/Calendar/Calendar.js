import React, {useEffect, useState} from 'react';
import './calendar.css';
import Launches from '../Launches/Launches';
import Main from '../Main/Main';
import FetchData from '../../service/FetchData';


const fetchData = new FetchData();

export default function Calendar() {


  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getLaunches()
      .then(data => {
        setData(data);
      })
  }, []);

  return (
    <>
      <Main />
      <section className="calendar">
          <div className="container">
            <ul className="calendar-list">
              {
                data.map((item, i) => (
                  <li className="calendar-item" key={i}>
                    <Launches image={item.links.patch.small} link={item.links.article} text={item.name} id={item.id} />
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
    </>
  )
}
