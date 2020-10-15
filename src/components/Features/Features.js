import React from 'react';
import './features.css';
import RelaxWrapper from 'react-rellax-wrapper';

const image = {
  'Falcon 1': 'falcon-1',
  'Falcon 9': 'falcon-9',
  'Falcon Heavy': 'falcon-heavy',
  'Starship': 'starship',
}

export default function Features({rocket, rocketFeatures}) {
  const features = {
    height: {
      meters: '',
      feet: '',
    },
    diameter: {
      meters: '',
      feet: '',
    },
    mass: {
      kg: '',
      lb: '',
    },
    payload_weights: {
      kg: '',
      lb: '',
    },
  }

  if (rocketFeatures) {
    features.height.meters = rocketFeatures.height.meters;
    features.height.feet = rocketFeatures.height.feet;
    features.diameter.meters = rocketFeatures.diameter.meters;
    features.diameter.feet = rocketFeatures.diameter.feet;
    features.mass.kg = rocketFeatures.mass.kg;
    features.mass.lb = rocketFeatures.mass.lb;
    features.payload_weights.kg = rocketFeatures.payload_weights[0].kg;
    features.payload_weights.lb = rocketFeatures.payload_weights[0].lb;
  }

  return (
    <div>
      <section className="features">
        <h2 className="features-title">
          {rocket} <br />Overview
          </h2>
        <div className="overview">

          <table className="table">
            <caption className="table-title">
              Size
            </caption>
            <thead>
              <tr>
                <td className="table-column">HEIGHT</td>
                <td className="table-column">{features.height.meters} m / {features.height.feet} ft</td>
              </tr>
              <tr>
                <td className="table-column">DIAMETER</td>
                <td className="table-column">{features.diameter.meters} m / {features.diameter.feet} ft</td>
              </tr>
              <tr>
                <td className="table-column">MASS</td>
                <td className="table-column">{features.mass.kg} kg / {features.mass.lb} lb</td>
              </tr>
              <tr>
                <td className="table-column">PAYLOAD TO LEO</td>
                <td className="table-column">{features.payload_weights.kg} kg / {features.payload_weights.lb} lb</td>
              </tr>
            </thead>
          </table>
          <RelaxWrapper speed={14}>
            <img
              src={`${image.hasOwnProperty(rocket) ? '../../img/' + image[rocket] + '.png' : ''}`}
              alt="rocket"
              className="rocket"
            />
          </RelaxWrapper>

          <article>
            <h3 className="features-subtitle">DESCRIPTION</h3>
            <p className="features-text">
              {rocketFeatures ? rocketFeatures.description : '' }
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
