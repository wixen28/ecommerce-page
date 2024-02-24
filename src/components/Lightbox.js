

import './Lightbox.css'
import closeIcon from '../images/icon-close.svg'
import {useState, useRef, useEffect} from 'react'
import previous from '../images/icon-previous.svg'
import next from '../images/icon-next.svg'
import productPhoto1 from '../images/image-product-1.jpg'
import productPhoto2 from '../images/image-product-2.jpg'
import productPhoto3 from '../images/image-product-3.jpg'
import productPhoto4 from '../images/image-product-4.jpg'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../images/image-product-4-thumbnail.jpg'

const mainPics = [
  {
      id: 1,
      image: productPhoto1
  },
  {
      id: 2,
      image: productPhoto2
  },
  {
      id: 3,
      image: productPhoto3
  },
  {
      id: 4,
      image: productPhoto4
  }
]

const thumbnails = [
  {
      id: 1,
      image: thumbnail1
  },
  {
      id: 2,
      image: thumbnail2
  },
  {
      id: 3,
      image: thumbnail3
  },
  {
      id: 4,
      image: thumbnail4
  }
]

const Lightbox = ({ showLightbox, setShowLightbox}) => {
  const [closeLightbox, setCloseLightbox] = useState(false)
  const [changeImg, setChangeImg] = useState(mainPics[1])
  const [activeImage, setActiveImage] = useState(mainPics[0])

  const nextPicture = () => {
    setActiveImage( (prevIndex) => {
      return prevIndex === mainPics.length -1 ? 0 : prevIndex + 1
    })
  }

  const previousPicture = () => {
    // setChangeImg( (changeImg - 1 + mainPics.length) % mainPics.length)
  }

  const handleClick = (id) => {
    setActiveImage( mainPics.find( onePic => onePic.id === id))
    // setActiveImage( mainPics.find( (onePic) => {
    //   return onePic[2]
    // }))
    console.log(changeImg.image)

  }
  return <div id='lightbox' style={{display: closeLightbox ? 'none' : 'block'}}>
      <div className="lightbox-main-image">
      <button onClick={ () => setShowLightbox(false)} className='lightbox-btn' ><img src={closeIcon} alt="" className='lightbox-icon'/></button>
      {
        changeImg && (
          // <img src={mainPics[activeImage].image} key={changeImg.id} className='lightbox-main-photo'/>
          <img src={activeImage.image} key={changeImg.id} className='lightbox-main-photo'/>
        )
      }
        <div className="lightbox-arrows">
            <img src={previous} alt="" className='previous-light' onClick={previousPicture}/>
            <img src={next} alt="" className='next-light'  onClick={nextPicture}/>
        </div>
        <div className="light-thumb-imgs">
          {
            thumbnails.map( (thumbnail) => {
              return <button className='thumb-btn-light' onClick={ () => handleClick(thumbnail.id)}><img src={thumbnail.image} alt="" className='thumb-img'/></button>
            })
          }
        </div>
       </div>
  </div>
}

export default Lightbox