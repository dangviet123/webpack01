import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {link_event} from '../../../constants/admincp/config';
import {useSelector} from 'react-redux';
function CarouselDetail() {
    
    const {DataImageSlide} = useSelector(state => state.Header);
    const renderImage = () => {
        let xhtml = null;
        xhtml = DataImageSlide.map((slide,index) => {
            return (
                <div key={index}>
                    <LazyLoadImage 
                        src={`${link_event}${slide.Image}`}
                        alt={``}
                        width={`100%`}
                        height={`100%`}
                    />
                </div>
            )
        })
        return xhtml;
    }
    return (
        <Carousel 
            infiniteLoop={true}
            showStatus={false} 
            swipeable={true} 
            emulateTouch={true}
            showIndicators={false}
            centerMode={true}
            centerSlidePercentage={80}
            swipeScrollTolerance={5}
            dynamicHeight={true}
            showThumbs={false}
        >  
            {renderImage()}
        </Carousel>
    )
}
export default CarouselDetail;