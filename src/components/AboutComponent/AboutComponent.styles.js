import styled from 'styled-components';

const AboutComponentStyles = styled.div`
  .about h3 {
    font-weight: 700;
    font-size: 34px;
    color: #4e4039;
  }

  .about h4 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
    color: #7a6960;
  }

  .about i {
    font-size: 48px;
    margin-top: 15px;
    color: #f39e7a;
  }

  .about p {
    font-size: 15px;
    color: #5a6570;
  }

  @media (max-width: 991px) {
    .about .about-img img {
      max-width: 70%;
    }
  }

  @media (max-width: 767px) {
    .about .about-img img {
      max-width: 90%;
    }
  }
`;

export default AboutComponentStyles;
