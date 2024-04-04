import React from 'react'

function ItemServicesComponent(props) {
    const { title, image, text } = props;
    return (
        <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100">
            <div className="icon-box">
                <div className="icon-box">
                    <img src={image} className="img-fluid" alt="" data-aos="zoom-in" /><br />
                </div>
                <h4 className="title"><a href="">{title}</a></h4>
                <p className="description">{text}</p>
            </div>
        </div>
    )
}

export default ItemServicesComponent