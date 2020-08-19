import React from 'react';
import renderHTML from 'react-render-html';
function TextSvTitle(props) {
    const {SvTitle} = props;
    return (
        <section className="dichvu-1">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="title" style={{textAlign: 'left'}}>
                        {renderHTML(SvTitle)}
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextSvTitle;
