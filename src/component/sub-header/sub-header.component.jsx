import React from 'react'

import './sub-header.styles.scss';
import photo from '../../assets/images/photo.png'



const SubHeader = () => (
  <div className='sub-header'>
    <div className='subheader_about'>
      <div className='position'>Учитель русского языка и литературы</div>
      <div className='name'>Куликова Инесса Анатольевна</div>
      <img src={photo} />
    </div>
    <div className='sub-header_images'></div>
  </div>
)

export default SubHeader;