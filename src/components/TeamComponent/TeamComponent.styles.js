import styled from 'styled-components';

const TeamComponentStyles = styled.div`

.container { 
    background-color: #fef8f5;
    padding: 5rem 1rem 1rem 5rem;

}

.itemcard {
    padding: 20px;
    box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
    transition: all 0.3s ease-in-out;
    border-radius: 25px;
    text-align: center;
    border-bottom: 3px solid #fff;

    &:hover {
      transform: translateY(-5px);
      border-color: #ef7f4d;
    }
}
.item-body {
    display: flex;
    flex-direction: column;
    gap: 40
}

.itemcard img {
    border-radius: 50%;
    margin-bottom: 20px
}

.itemcard .title {
    opacity: 0.9;
    font-weight: 700;
    text-transform: capitalize;
}
.subtitle {
    color: '#ef7f4d';
    opacity: 1;
    font-weight: 500;
    text-transform: capitalize;
}
.itemcard .mail {
    opacity: 0.7;
    font-weight: 500;
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

export default TeamComponentStyles;
