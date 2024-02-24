

import './Main.css'
import productPhoto1 from '../images/image-product-1.jpg'
import productPhoto2 from '../images/image-product-2.jpg'
import productPhoto3 from '../images/image-product-3.jpg'
import productPhoto4 from '../images/image-product-4.jpg'
import thumbnail1 from '../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../images/image-product-4-thumbnail.jpg'
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import cartImg from '../images/icon-cart.svg'
import {useState, useEffect, useRef} from 'react'
import Lightbox from './Lightbox'


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

const Main = () => {
    const [showLightbox, setShowLightbox] = useState(false)
    const [changeImg, setChangeImg] = useState(mainPics[0])
    
    const handleClick = (id) => {
        setChangeImg(mainPics.find( onePic => onePic.id === id))
    }

  return <div id='main' >
    <div className="photos-part">
       <div className="main-product-image">

        <button onClick={ () => setShowLightbox(true)} className='main-photo-btn'>
        { changeImg && (
                    <img src={changeImg.image} alt='' key={changeImg.id} className='main-photo' />
                )
            }</button>
      {showLightbox && <Lightbox  showLightbox={showLightbox} setShowLightbox={setShowLightbox}/>  }
        <div className="mobile-arrows">  
            <img src={previous} alt="" className='previous' />
            <img src={next} alt="" className='next' />
        </div>
        <div className="thumbnail-imgs">
            {
                thumbnails.map( oneThumbnail => (
                    <button className='thumb-btn' onClick={ () => handleClick(oneThumbnail.id)}><img src={oneThumbnail.image} key={oneThumbnail.id}  alt="" className='thumb-img'/></button>
                ))
            }
        </div>
       </div> 
    </div>
    <div className="info-part">
        <h1 className='orange-header'>sneaker company</h1>
        <h2 className='fall-header'>fall limited edition sneakers</h2>
        <p className='info-para'>These low-profile snakers are your perfect
        casual wear companion. Featuring a durable rubber outer sole. they'll
        withstand everything the weather can offer</p>
        <div className="price-discount-original">
            <div className="price-discount">
                <p className="price">$125.00</p>
                <p className="discount">50%</p>
            </div>
            <p className="original-price">$250.00</p>
        </div>
        <div className="btns-part">
            <div className="number-of">
                <button className='change-num'><img src={minus} alt="" /></button>
                <p className="number-of-num">0</p>
                <button className="change-num"><img src={plus} alt="" /></button>
            </div>
            <button className="add-to-cart"><img src={cartImg} className='cart-img' alt="" /> Add to cart</button>
        </div>
    </div>
    {/* Showing lightbox component */}
    {/* {showLightbox && <Lightbox  showLightbox={showLightbox} setShowLightbox={setShowLightbox}/>  } */}
  </div>
  
}

export default Main