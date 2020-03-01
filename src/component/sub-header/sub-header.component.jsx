import React from 'react'

import './sub-header.styles.scss';

import photo from '../../assets/images/photo.png'
import booksPicture from '../../assets/images/books2.jpg'

const SubHeader = () => (
  <div className='sub-header' style={{
    backgroundImage: `url(${booksPicture})`
  }}>
    <div className='sub-header_about'>
      <div className='photo'>
        <img alt='Teacher' src={photo} />
      </div>
      <div className='position'>Учитель русского языка и литературы</div>
      <div className='name'>Куликова Инесса Анатольевна</div>
    </div>
  </div>
)

export default SubHeader;