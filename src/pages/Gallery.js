import React from 'react'
import kalaa from '../assests/image.jpg';
import central from '../assests/image1.jpg';
import souk from '../assests/Nabatieh_2017-08.png';

const Gallery=() =>{
  return (
    <div className="main-content">
      <h2>Village Gallery</h2>
      <div className="gallery-grid">
       <img src={kalaa} alt='kalaa' />
       <img src={central} alt ='central'/>
       <img src ={souk} alt ='souk'/>
       </div></div>

  )
}
export default Gallery;