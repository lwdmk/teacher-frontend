import React from "react"

const BlockListItem = ({ item }) => {
  return (
    <div className="block-list-item">
      <div className="block-list-item-title">{item.title}</div>
      <div className="block-list-item-short">{item.short}</div>
    </div>
  );
}

export default BlockListItem;