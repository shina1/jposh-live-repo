import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProductByCategory } from '../../actions/productActions'
import Loader from '../../Components/loader/Loader'
import Message from '../../Components/message/Message'
import Rating from '../../Components/Ratings'
import './style.css';

const BridalsAndAsoEbiScreen = () => {
    const dispatch = useDispatch()
    const productCategory = useSelector((state) => state.productCategory)
    const {loading, products, error} = productCategory;

    console.log(products);
    let category = 'bridals-asoEbi'
    useEffect(() => {
        dispatch(listProductByCategory(category));
    }, [dispatch, category]);
  return (
    <div className='brida-Product-container'>
      {
        loading &&  <div className="loader-box">
        <Loader />
     </div>
      }
      {
        error && <Message type={'error'} message={'Somthing went wrong!'} />
      }
    {

      products ?
      products.map((product) => {
    return <div className='bridal-productWrapper'>
          <div className='bridal-prod-img-wrapper'>
          <Link to={`/product/${product._id}`}>
              <img src={product.img} alt="Popular Products"/>
          </Link>
          </div>
      
          <div className='bridal-productWrapper-footer'>
            <div className='inner'>
                <div className='ratings'>
                  <div >
                  <Rating 
                    value={product.avgRating}
                  />
                  </div>
                </div>
                <div className='reviews'>
                  
                  <span>{product.numReviews} reviews</span>
                  
                  </div>
            </div>
            <div className='bridal-product-details-foot'>
            <div className='bridal-foot-prod-name'><h4>{product.title}</h4></div>
            {
              product.discount ? <div className='bridal-foot-prod-price disc-price'><h4>£{product.price}</h4> <h4>£{product.discoutPrice}</h4></div> :
                <div className='foot-prod-price'><h4>£{product.price}</h4></div>  
            }
          </div>
          </div>
    </div>
      })  :
      <div className="loader-box">
          <Loader />
      </div> 
    }
    
  </div>
  )
}

export default BridalsAndAsoEbiScreen
