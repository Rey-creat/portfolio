import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Project.css'; // Import styles for this component
import image2 from '../images/mobile.png';
import image3 from '../images/mobile1.png';
import image4 from '../images/blog.png';
import image5 from '../images/about1.png';

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-header">MY PROJECTS</h1>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        swipeable={true}
        transitionTime={500}
      >
        {[ 
          {
            title: "Sign In",
            text: "Welcome to Homeland! Dive back into my community by signing in to access all the personalized features and updates. Stay connected with friends, participate in discussions, and explore new opportunities within your community. My account keeps you updated and engaged—sign in now to continue your journey!",
            img: image2
          },
          {
            title: "Sign Up",
            text: "Join Homeland today and become a part of our vibrant community! By signing up, you’ll create an account that allows you to connect with like-minded individuals, participate in exclusive discussions, and access personalized content. Register now to unlock all the benefits and start exploring your new community!.",
            img: image3
          },
          {
            title: "About Us",
            text: "At Johnson & Johnson, we are dedicated to advancing global healthcare through innovation and commitment. With a legacy of over 130 years, our mission is to improve the health and well-being of people worldwide. Our diverse portfolio spans pharmaceuticals, medical devices, and consumer health products.",
            img: image4
          },
          {
            title: "Blog",
            text: "Welcome to the Johnson & Johnson Blog, your source for the latest insights, updates, and innovations from the forefront of healthcare. Our blog covers a range of topics, including breakthrough research, product developments, and expert opinions on health trends. Stay informed with stories about our global initiative.",
            img: image5
          }
        ].map((item, index) => (
          <div key={index} className={`portfolio-slide ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
            <div className="portfolio-container">
              <div className={`portfolio-text ${activeIndex === index ? 'show' : ''}`}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <div className="logos">
                <img src={item.img} alt={`Project ${index + 1}`} className={`image${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Project;
