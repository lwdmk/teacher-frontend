import React from 'react'
import SubHeader from '../../component/sub-header/sub-header.component';

import './homepage.styles.scss';

const HomePage = () => (
  <React.Fragment>
    <SubHeader />
    <div class='homepage-blocks'>
      <div class='block'>
        <h2>Последнение добавленные материалы</h2>
        <div className='last-articles'>
          <div className='article-preview'>
            <div className='article-title'>
              Подготовка к ЕГЭ 2020
        </div>
            <div className='article-short'>Материал содержит решение части А и В</div>
          </div>
          <div className='article-preview'>
            <div className='article-title'>
              Подготовка к ЕГЭ 2020
        </div>
            <div className='article-short'>Материал содержит решение части А и В</div>
          </div>
          <div className='article-preview'>
            <div className='article-title'>
              Подготовка к ЕГЭ 2020
        </div>
            <div className='article-short'>Материал содержит решение части А и В</div>
          </div>
          <div className='article-preview'>
            <div className='article-title'>
              Подготовка к ЕГЭ 2020
        </div>
            <div className='article-short'>Материал содержит решение части А и В</div>
          </div>
        </div>
      </div>
      <div class='block'>
        <h2>Последнение добавленные тесты</h2>
        <div className='last-articles'>
          <div className='article-preview'>
            <div className='article-title'>
              Подготовка к ЕГЭ 2020
        </div>
            <div className='article-short'>Материал содержит решение части А и В</div>
          </div>
          <div className='article-preview'>
            <div className='article-title'>
              Подготовка к ЕГЭ 2020
        </div>
            <div className='article-short'>Материал содержит решение части А и В</div>
          </div>
          <div className='article-preview'>
            <div className='article-title'>
              Подготовка к ЕГЭ 2020
        </div>
            <div className='article-short'>Материал содержит решение части А и В</div>
          </div>
          <div className='article-preview'>
            <div className='article-title'>
              Подготовка к ЕГЭ 2020
        </div>
            <div className='article-short'>Материал содержит решение части А и В</div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default HomePage;