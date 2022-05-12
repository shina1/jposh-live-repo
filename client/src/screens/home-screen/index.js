import React, { Suspense }  from 'react'

import Loader from '../../Components/loader/Loader'
// import AllProductsComponent from '../../Components/Product/allProducts';
import './style.css'

// const ResponsiveHeader = React.lazy(() => import('../../Components/Header-component/ResponsiveHeader'));
import CarouselSlider  from '../../Components/SlidderComponent/Carousel';
import About from '../../Components/About';
import Categories  from '../../Components/Categories';
import Newsletter  from '../../Components/Newsletter';
import Products  from '../../Components/Product/Products';
import Testimonial from '../../Components/Testimonials';
import AllProductsComponent  from '../../Components/Product/allProducts';
// const Footer = React.lazy(() => import('../../Components/Footer'));




const Home = () => {
  return (
    <div className='container'>
      <Suspense fallback={<Loader />}>
        <CarouselSlider />
        <About />
        <Categories />
        <AllProductsComponent />
        <Products />
        <Testimonial />
        <Newsletter />
        <div>
            <a
            href="https://wa.me/+447470708848"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
      </Suspense>
    </div>
  )
}

export default Home



