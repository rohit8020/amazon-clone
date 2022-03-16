import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
            <div>
                <img loading='lazy' src="https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/80dd3ec5-834f-4e74-b688-70b29c77f5bc_scaled.jpg" alt="🙋" />
            </div>

            <div>
                <img loading='lazy' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-510693044-1550590816.jpg" alt="🙋" />
            </div>

            <div>
                <img loading='lazy' src="https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/80dd3ec5-834f-4e74-b688-70b29c77f5bc_scaled.jpg" alt="🙋" />
            </div>
        </Carousel>
    </div>
  )
}

export default Banner