import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum">
        HOME &#8658; SHOP &#8658; {product.category} &#8658; {product.name}
    </div>

  )
}
export default Breadcrum;