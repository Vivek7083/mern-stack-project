import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionBox-navigator">
            <div className="descriptionBox-nav-box">
                Description
            </div>
            <div className="descriptionBox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionBox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat accusamus, illo cumque doloribus molestias repudiandae quibusdam. Ipsa rem libero laboriosam? Molestias doloremque harum non ab, nam qui in esse vitae fugit sint, adipisci quis.</p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo praesentium non sit quisquam ut officiis odit, aperiam quasi sapiente, iste, unde id earum facere magnam nemo cupiditate laborum totam nobis laboriosam corrupti. Neque, ut.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox;
