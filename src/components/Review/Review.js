import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = () => {
  const testimonialData = [
    {
      name: "Malik Asif",
      client: "Client",
      img: require("../../Assets/Icons/testimonial1.png"),
      stars: [1, 2, 3, 4, 5],
      description: "The website you designed, Haris, is a testament to your creativity and expertise. Every detail showcases your dedication to delivering excellence. Thank you for bringing my vision to life!"
    },
    {
      name: "Faizan Farooq",
      client: "Client",
      img: require("../../Assets/Icons/testimonial2.png"),
      stars: [1, 2, 3, 4, 5],
      description: "Haris, your exceptional talent and dedication shine through in the stunning website you've crafted for me. It exceeds my expectations in every way, and I'm truly grateful for your outstanding work!"
    },
    {
      name: "Faheem Ahmad",
      client: "Client",
      img: require("../../Assets/Icons/testimonial3.png"),
      stars: [1, 2, 3, 4, 5],
      description: "Harris is a remarkable frontend developer with an eye for detail and a knack for creating visually stunning user interfaces."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // Adjust this value as needed (in milliseconds)
  };

  return (
    <section className="testimonial section">
      <h2 className="section-title">Testimonial</h2>
      <span className="section-subtitle">My Client saying</span>
      <div className="testimonial-container container">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="testimonial-content">
              <div className="testimonial-data">
                <div className="testimonial-header">
                  <img src={testimonial.img} alt="testimonial-img" className="testimonial-img" />
                  <div>
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <span className="testimonial-client">{testimonial.client}</span>
                  </div>
                </div>
                <div>
                  {testimonial.stars.map((star, index) => (
                    <i key={index} className="fa-regular fa-star testimonial-icon" />
                  ))}
                </div>
              </div>
              <p className="testimonial-description">{testimonial.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Review;
