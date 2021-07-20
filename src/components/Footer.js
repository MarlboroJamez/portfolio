/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--light-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">James Williams</h1>
          <PText>
            A freelance web designer and developer from Pretoria, South Africa.
            I always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+27 8204 82044',
                path: 'tel:+278204 82044',
              },
              {
                title: 'jameswilliamsmdl@gmail.com',
                path: 'mailto:jameswilliamsmdl@gmail.com',
              },
              {
                title: 'Pretoria, Gauteng, South Africa',
                path: 'https://www.google.com/maps/place/Pretoria/@-25.7582734,28.0575202,11z/data=!3m1!4b1!4m5!3m4!1s0x1e95619cbec65033:0xf66262b07a847b4c!8m2!3d-25.7478676!4d28.2292712',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}
