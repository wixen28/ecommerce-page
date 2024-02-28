

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
import {useState, useEffect, useReducer} from 'react'
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

const Main = ({showMenu, count, setCount, addToCart}) => {
    const [showLightbox, setShowLightbox] = useState(false)
    const [changeImg, setChangeImg] = useState(mainPics[0])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    // const [count, setCount] = useState(0)


    /* change main picture previous/next */
   const changePicture = (delta) => { 
        const index = mainPics.findIndex( onePic => onePic.id === changeImg.id)
        if( index + delta < 0) {
            setChangeImg(mainPics[mainPics.length -1])
        } else if(index + delta > mainPics.length -1) {
            setChangeImg(mainPics[0])
        } else {
            setChangeImg(mainPics[index + delta])
        }
    }
    
    /* thumbnail picture change */
    const handleClick = (id) => {
        setChangeImg(mainPics.find( onePic => onePic.id === id))
    }

    /* minus function */
    const handleCountingMinus = () => {
        if(count === 0) {
            setCount(0)
        } else {
            setCount(count -1)
        }
    }
    /* plus function */
    const handleCountingPlus = () => {
        if(count === 10 ) {
            setCount(10)
            alert('Maximum order is 10 pieces')
        } else {
            setCount(count +1)
        }

    }    



    /* allow showing lightbox only from 760px and bigger*/
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

            window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return <div id='main'>
    <div className="photos-part">
       <div className="main-product-image">

        <button onClick={ () => setShowLightbox(true)} className='main-photo-btn'>
        { changeImg && (
                    <img src={changeImg.image} alt=''  className='main-photo' />
                )
            }</button>
      { showLightbox && windowWidth > 760 && <Lightbox  showLightbox={showLightbox} setShowLightbox={setShowLightbox}/>  }
        <div className="mobile-arrows">  
        { !showMenu && <img src={previous} alt="" className='previous' onClick={ () => changePicture(-1)}/>}
            
            <img src={next} alt="" className='next' onClick={() => changePicture(+1)}/>
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
                <button className='change-num' onClick={handleCountingMinus}><img src={minus} alt="" /></button>
                <p className="number-of-num">{count}</p>
                <button className="change-num"><img src={plus} alt="" onClick={handleCountingPlus}/></button>
            </div>
            <button className="add-to-cart" onClick={addToCart}><img src={cartImg} className='cart-img' alt="" /> Add to cart</button>
        </div>
    </div>
    <p className='credits'>Add frontend mentor credits</p>
  </div>
  
}

export default Main