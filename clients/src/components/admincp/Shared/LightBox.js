import React from 'react';
import {SRLWrapper} from "simple-react-lightbox";
function LightBox(props) {
  const {images} = props;
  return (
        <div className="MyComponent">
            <div style={{display: 'none'}}>
              <SRLWrapper >
              {
                images.length === 0 ? 
                (<div className="row" key={0}>
                <div className="col-12">
                <img src={``} alt={``}  />
                </div>
              </div>): (<div className="row">
                {images.map(({ thumbnail, src,Description }) => (
                  <div key={thumbnail} className="col-md-4 col-6 col-image-small">
                    <a href={src} data-attribute="SRL">
                      <img src={thumbnail} alt={Description} />
                    </a>
                  </div>
                ))}
              </div>)}
              
              </SRLWrapper>
            </div>
        </div>
    
  )
}

export default LightBox;
