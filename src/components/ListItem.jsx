import React from 'react'

function ListItem({items}) {

    const displayList = items.map(item => <span key={item}>{item}</span>)
    
  return (
    <>{displayList}</>
    // {displayList}
    // <span>{items}</span>
  )
}

export default ListItem