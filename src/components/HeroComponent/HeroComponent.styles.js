import styled, { keyframes } from 'styled-components';

const upDownAnimation = keyframes`
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const HeroComponentStyles = styled.div`
  width: 100%;
  height: 500px;
  background: #fef8f5;
  border-bottom: 2px solid #fcebe3;
  padding-top: 4rem;
  margin: 75px 0 100px 0;

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #4e4039;
  }

  h2 {
    color: #a08f86;
    margin: 15px 0 0 0;
    font-size: 24px;
  }

  .btn-get-started {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 8px 28px;
    border-radius: 3px;
    transition: 0.5s;
    margin-top: 30px;
    color: #fff;
    background: #eb5d1e;

    &:hover {
      background: #ef7f4d;
    }
  }

  .animated {
    animation: ${upDownAnimation} 2s ease-in-out infinite alternate-reverse both;
  }

  @media (max-width: 991px) {
    height: calc(100vh - 72px);

    .animated {
      -webkit-animation: none;
      animation: none;
    }

    .hero-img {
      text-align: center;

      img {
        width: 50%;
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
      line-height: 36px;
    }

    h2 {
      font-size: 18px;
      line-height: 24px;
    }

    .hero-img img {
      width: 70%;
    }
  }

  @media (max-width: 575px) {
    .hero-img img {
      width: 80%;
    }
  }

  @media (max-height: 600px) {
    height: 120vh;
  }
`;

export default HeroComponentStyles;
