import React from 'react';
import PropTypes from 'prop-types'
import BlockListItem from '../block-list-item/block-list-item.component'

const BlockList = ({ title, blocks, offset = 0, limit = 10 }) => {
  console.log('BlockList', blocks)
  return (
    <div className="block-list-container">
      {title ? (
        <div className="cblock-list-header">
          {title}
        </div>
      ) : null}
      <div className="block-list">
        {blocks.slice(offset, limit).map((item) =>
          <div key={item.id} className="block-list-item">
            <BlockListItem item={item} />
          </div>
        )}
      </div>
    </div>
  )
}

BlockList.propTypes = {
  title: PropTypes.string,
  offset: PropTypes.number,
  limit: PropTypes.number,
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      short: PropTypes.string
    })
  ).isRequired
}

export default BlockList; 