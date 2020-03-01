import React from 'react';
import { useParams } from 'react-router-dom';

import './list-item.styles.scss';

const ListItemPage = ({ match }) => {
  let { itemId } = useParams();

  return (
    <h3>ListItemPage : {itemId}</h3>
  )
}

export default ListItemPage;