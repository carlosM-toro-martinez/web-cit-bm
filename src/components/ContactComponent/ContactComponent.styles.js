import styled from 'styled-components';

const ContactComponentStyles = styled.div`
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

  .contact .info {
    border-top: 3px solid #eb5d1e;
    border-bottom: 3px solid #eb5d1e;
    padding: 30px;
    background: #fff;
    width: 100%;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  }

  .contact .info i {
    font-size: 20px;
    color: #eb5d1e;
    float: left;
    width: 44px;
    height: 44px;
    background: #fdf1ec;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }

  .contact .info h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #7a6960;
  }

  .contact .info p {
    padding: 0 0 10px 60px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #ab9d95;
  }

  .contact .info .email p {
    padding-top: 5px;
  }

  .contact .info .social-links {
    padding-left: 60px;
  }

  .contact .info .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #333;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    margin-right: 10px;
  }

  .contact .info .social-links a:hover {
    background: #eb5d1e;
    color: #fff;
  }

  .contact .info .email:hover i,
  .contact .info .address:hover i,
  .contact .info .phone:hover i {
    background: #eb5d1e;
    color: #fff;
  }

  .contact .php-email-form {
    width: 100%;
    border-top: 3px solid #eb5d1e;
    border-bottom: 3px solid #eb5d1e;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  }

  .contact .php-email-form .form-group {
    padding-bottom: 8px;
  }

  .contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .error-message br + br {
    margin-top: 25px;
  }

  .contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }

  .contact .php-email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }

  .contact .php-email-form input,
  .contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }

  .contact .php-email-form input {
    height: 44px;
  }

  .contact .php-email-form textarea {
    padding: 10px 12px;
  }

  .contact .php-email-form button[type=submit] {
    background: #eb5d1e;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 4px;
  }

  .contact .php-email-form button[type=submit]:hover {
    background: #ef7f4d;
  }

  @-webkit-keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ContactComponentStyles;
