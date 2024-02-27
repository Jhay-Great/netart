import React from 'react'

function ImageContainer({image, description, elementStyles=''}) {
  return (
    <img src={image} alt={description} className={elementStyles} />
  )
}

export default ImageContainer