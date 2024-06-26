import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PortfolioComponentStyles = styled.div`
section {
  padding: 60px 0;
}

.section-bg {
  background-color: #fef8f5;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 0;
  line-height: 1px;
  margin-bottom: 15px;
  color: #c2b7b1;
}
.section-title p {
  padding-bottom: 15px;
  margin-bottom: 15px;
  position: relative;
  font-size: 32px;
  font-weight: 700;
  color: #4e4039;
}
  .portfolio-item {
    margin-bottom: 30px;
    overflow: hidden;
  }
  .portfolio-container {
    overflow: hidden;
  }

  .img-fluid {
    overflow: hidden;
  }

  .portfolio #portfolio-flters {
    padding: 0;
    margin: 0 0 35px 0;
    list-style: none;
    text-align: center;
  }

  .portfolio #portfolio-flters li {
    cursor: pointer;
    margin: 0 15px 15px 0;
    display: inline-block;
    padding: 5px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #212529;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
  }
  
  .portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
    color: #eb5d1e;
  }

  .portfolio #portfolio-flters li:last-child {
    margin-right: 0;
  }

  .portfolio .portfolio-wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    z-index: 1;
  }

  .portfolio .portfolio-wrap::before {
    content: "";
    background: rgba(122, 105, 96, 0.6);
    position: absolute;
    left: 100%;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all ease-in-out 0.3s;
    z-index: 2;
  }

  .portfolio .portfolio-wrap img {
    transition: 0.3s;
    position: relative;
    z-index: 1;
  }

  .portfolio .portfolio-wrap .portfolio-links {
    opacity: 0;
    left: 0;
    right: 0;
    top: calc(50% - 32px);
    text-align: center;
    z-index: 3;
    position: absolute;
    transition: all ease-in-out 0.3s;
  }

  .portfolio .portfolio-wrap .portfolio-links a {
    color: #eb5d1e;
    margin: 0 4px;
    line-height: 0;
    background-color: #fff;
    padding-top: 6px;
    padding-right: 1px;
    border-radius: 50px;
    text-align: center;
    width: 32px;
    height: 32px;
    display: inline-block;
    transition: 0.3s;
  }

  .portfolio .portfolio-wrap .portfolio-links a i {
    line-height: 0;
    font-size: 20px;
  }

  .portfolio .portfolio-wrap .portfolio-links a:hover {
    background: #eb5d1e;
    color: #fff;
  }

  .portfolio .portfolio-wrap .portfolio-info {
    opacity: 0;
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3;
    transition: all ease-in-out 0.3s;
  }

  .portfolio .portfolio-wrap .portfolio-info h4 {
    font-size: 20px;
    color: #fff;
    font-weight: 600;
  }

  .portfolio .portfolio-wrap .portfolio-info p {
    color: #ffffff;
    font-size: 14px;
    text-transform: uppercase;
  }

  .portfolio .portfolio-wrap:hover::before {
    left: 0;
  }

  .portfolio .portfolio-wrap:hover .portfolio-links {
    opacity: 1;
    top: calc(50% - 16px);
  }

  .portfolio .portfolio-wrap:hover .portfolio-info {
    opacity: 1;
    bottom: 0;
  }

  .portfolio-details {
    padding-top: 40px;
  }

  .portfolio-details .portfolio-details-slider img {
    width: 100%;
  }


`;

export default PortfolioComponentStyles;
