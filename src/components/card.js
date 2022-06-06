import {  MdLocationPin } from 'react-icons/md';
import './card.css'

export default function Card (props) {
  return (
    <div className='card'>
      <img src={props.data.imageUrl} alt="card"/>
      <div className='card--description'>
          <p className='card--location'><span><MdLocationPin /></span>{props.data.location} <a href={props.data.googleMapsUrl}>View en Google Maps</a></p>
          <h2 className='card--h2'>{props.data.title}</h2>
          <p className='card--date'>{props.data.startDate} - {props.data.endDate}</p>
          <p className='card--description_p'>{props.data.description}</p>
      </div>
    </div>
  )
}
