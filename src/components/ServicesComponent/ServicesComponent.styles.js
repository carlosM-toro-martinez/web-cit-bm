import styled from 'styled-components';

const ServicesComponentStyles = styled.div`
  .services .icon-box {
    padding: 30px;
    position: relative;
    overflow: hidden;
    margin: 0 0 40px 0;
    background: #fff;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
    transition: all 0.3s ease-in-out;
    border-radius: 15px;
    text-align: center;
    border-bottom: 3px solid #fff;

    &:hover {
      transform: translateY(-5px);
      border-color: #ef7f4d;
    }
  }

  .icon {
    i {
      font-size: 48px;
      line-height: 1;
      margin-bottom: 15px;
      color: #ef7f4d;
    }
  }

  .title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;

    a {
      color: #111;
    }
  }

  .description {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 0;
  }
  section {
  padding: 60px 0;
  overflow: hidden;
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
.section-title p::after {
  content: "";
  position: absolute;
  display: block;
  width: 60px;
  height: 2px;
  background: #eb5d1e;
  bottom: 0;
  left: calc(50% - 30px);
}
`;

export default ServicesComponentStyles;
