import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {useSelector} from 'react-redux';
import {link_breadcrumb} from '../../../constants/admincp/config';

function SliderHeader() {
    const {DataSlide} = useSelector(state => state.Header);

    const renderSlide = () => {
        let xhtml = null;
        xhtml = DataSlide.map((slide,index) => {
            return (
                <div key={index} data-src={`${link_breadcrumb}${slide.Image}`} />
            )
        });
        return xhtml;
    }
    return (
        
        <section className="phanam-slider-1">
            <article>
                <div className="list-items">
                    <AwesomeSlider bullets={false} >
                        {renderSlide()}
                    </AwesomeSlider>
                </div>
            </article>
        </section>
    )
}
export default SliderHeader;
