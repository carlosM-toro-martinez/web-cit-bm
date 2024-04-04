import React from 'react';
import ItemPortfolioComponentStyles from './ItemPortfolio.styles';

function ItemPortfolioComponent(props) {
    const { image, title, id_category } = props.project;
    return (
        <ItemPortfolioComponentStyles className="col-lg-4 col-md-6 portfolio-item ">
            <div className="portfolio-wrap">
                <img src={image} className="img-fluid" alt="" />
                <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                </div>
                <div className="portfolio-info" >
                    <h4>{title}</h4>
                    <p>{title}</p>
                </div>
            </div>
        </ItemPortfolioComponentStyles>
    )
}

export default ItemPortfolioComponent