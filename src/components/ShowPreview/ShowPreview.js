// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React from 'react';
import style from './ShowPreview.module.css';
import { Link } from 'react-router-dom';

const ShowPreview = (props) =>  
  <div className={`${style.container} t-preview`}>
    <div className={`${style.containerTop}`}>
      <Link to={`/shows/${props.id}`} className='t-link'>{props.name}</Link>
      <img src={props.image} alt={props.name} />
    </div>
  </div>  

export default ShowPreview;