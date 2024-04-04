import styled from 'styled-components';

const QuestionComponentStyles = styled.div`
  .faq {
    padding: 60px 0;
  }

  .faq .faq-list {
    padding: 0;
    list-style: none;
  }

  .faq .faq-list li {
    border-bottom: 1px solid #eae7e5;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .faq .faq-list .question {
    display: block;
    position: relative;
    font-family: #eb5d1e;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    font-weight: 600;
    padding-left: 25px;
    cursor: pointer;
    color: #c54811;
    transition: 0.3s;
  }

  .faq .faq-list i {
    font-size: 16px;
    position: absolute;
    left: 0;
    top: -2px;
  }

  .faq .faq-list p {
    margin-bottom: 0;
    padding: 10px 0 0 25px;
  }

  .faq .faq-list .icon-show {
    display: none;
  }

  .faq .faq-list .collapsed {
    color: #343a40;
  }

  .faq .faq-list .collapsed:hover {
    color: #eb5d1e;
  }

  .faq .faq-list .collapsed .icon-show {
    display: inline-block;
    transition: 0.6s;
  }

  .faq .faq-list .collapsed .icon-close {
    display: none;
    transition: 0.6s;
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

export default QuestionComponentStyles;
