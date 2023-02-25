import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const Hero = () => {
  return (
    <div className="mx-4 bg-[rgb(227,230,230)]">
         <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
                <div>
                    <img loading="lazy" src="https://m.media-amazon.com/images/I/71LbHsact9L._SX3000_.jpg" />
                </div>
                <div>
                    <img loading="lazy"  src="https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png" />
                </div>
                <div>
                    <img  loading="lazy" src="https://m.media-amazon.com/images/I/619rl+QqjwL._SX3000_.jpg" />
                </div>
                <div>
                    <img  loading="lazy" src="https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg" />
                </div>
                <div>
                    <img  loading="lazy" src="https://m.media-amazon.com/images/I/61d4KgLZvZL._SX3000_.jpg" />
                </div>
                <div>
                    <img  loading="lazy" src="https://m.media-amazon.com/images/I/61mNeTYmm0L._SX3000_.jpg" />
                </div>
                <div>
                    <img loading="lazy"  src="https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg" />
                </div>
            </Carousel>
    </div>
  )
}

export default Hero
