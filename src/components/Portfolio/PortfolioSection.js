import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 // Assuming you have a CSS file for styling

const PortfolioSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust this value as needed (in milliseconds)
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className="portfolio section" id="portfolio" >
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">Most recent work</span>

      <div className="portfolio-container container">
        <Slider {...settings } style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="portfolio-content grid  custom-slide "   >
            <img src={require('../../Assets/project1.svg').default} alt="" className="portfolio-img" />
            <div className="portfolio-data custom-slide">
              <h3 className="portfolio-title">Business Websites</h3>
              <p className="portfolio-description">
                Dynamic business sites that reflect your brand and engage customers effectively.
              </p>
              <a href="https://github.com/harisahmad59/CodeHype-Responsive-Website" target="_blank" className="button button-flex button-small portfolio-button">
                Project Link
                <i className="fa-solid fa-arrow-right button-icon"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-content grid  custom-slide">
            <img src={require('../../Assets/project2.svg').default} alt="" className="portfolio-img" />
            <div className="portfolio-data custom-slide">
              <h3 className="portfolio-title">Portfolio Websites</h3>
              <p className="portfolio-description">
                Impressive portfolio sites that showcase your talents with a flawless user experience.
              </p>
              <a href="https://github.com/harisahmad59/Hypefolio" target="_blank" className="button button-flex button-small portfolio-button">
                Project Link
                <i className="fa-solid fa-arrow-right button-icon"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-content grid custom-slide">
            <img src={require('../../Assets/project3.svg').default} alt="" className="portfolio-img" />
            <div className="portfolio-data custom-slide">
              <h3 className="portfolio-title">Landing Pages</h3>
              <p className="portfolio-description">
                Compelling landing pages that drive conversions and engage your audience.
              </p>
              <a href="https://github.com/harisahmad59/Hypefolio" target="_blank" className="button button-flex button-small portfolio-button">
                Project Link
                <i className="fa-solid fa-arrow-right button-icon"></i>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="swiper-button-next" onClick={onClick}>
      <i className="fa-solid fa-angle-right swiper-icon"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="swiper-button-prev" onClick={onClick}>
      <i className="fa-solid fa-angle-left swiper-icon"></i>
    </div>
  );
};

export default PortfolioSection
