import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoadingBar from 'react-redux-loading-bar';
function PubicLayoutComponent(props) {
    const { children } = props;
    return (
        <div >
            <LoadingBar style={{zIndex:9999,backgroundColor:'#006ab6'}}  updateTime={100}  maxProgress={90} progressIncrease={10} />
            <Header />
                { children }
            <Footer />
        </div>
    )
}
export default PubicLayoutComponent;