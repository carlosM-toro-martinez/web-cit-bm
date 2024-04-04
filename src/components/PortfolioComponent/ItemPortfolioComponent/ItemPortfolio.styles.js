import styled, { keyframes } from 'styled-components';

const visibilityFrame = keyframes`
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
`;

const ItemPortfolioComponentStyles = styled.div`

  .portfolio-wrap {
    margin-bottom: 30px;
    animation: ${visibilityFrame};
    animation-iteration-count: infinite;
    animation-duration: 2s;
  }

  

`;

export default ItemPortfolioComponentStyles;
