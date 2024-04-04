import styled from 'styled-components';

const ItemQuestionComponentStyles = styled.div`
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
`;

export default ItemQuestionComponentStyles;
