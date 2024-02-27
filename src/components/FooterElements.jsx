import React from 'react'
import ImageContainer from './ImageContainer'

function FooterElement({content}) {
    const { image, description, elementStyles, information } = content
  return (
    <div>
        <ImageContainer image={image} description={description} elementStyles={elementStyles} />
        <p>{information}</p>
    </div>
  )
}

export default FooterElement