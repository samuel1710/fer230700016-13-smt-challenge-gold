import React, { useState, useEffect } from "react";
import { IoIosStar, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import GambarIrene from "../../images/irene.png";
// import GambarWendy from "../../images/wendy.png";
// import GambarJoy from "../../images/joy.png";

const TestimonialCarousel = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [testimonialData, setTestimonialData] = useState([
    {
      image: '${procces.env.PUBLIC_URL}../images/irene.png',
      rating: 5,
      comment: "Puas dengan pelayanannya. Mobilnya tidak ada kerusakan dan tidak mogok di jalan",
      info: "Irene, 22nd, South Korea",
    },
    { image: '${procces.env.PUBLIC_URL}../images/joy.png',rating: 5, comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium ullam, ab explicabo tenetur earum impedit. Provident tenetur veniam aliquam!.", info: "Wendy, 23rd, Kopo Sayati" },
    {
      image: '${procces.env.PUBLIC_URL}../images/irene.png',
      rating: 5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam architecto optio vel consequuntur. Animi iusto suscipit sit ratione iure neque dolorum consectetur debitis ullam..",
      info: "Joy, 27th, Cijerah",
    },
  ]);

  const moveItem = () => {
    const temp = testimonialData;
    temp.push(temp.shift());
    console.log(temp);
    setTestimonialData([...temp]);
  };

  // useEffect(() => {
  //   console.log(activeItem);
  //   moveItem();
  // }, [activeItem]);

  // console.log(testimonialData);
  return (
    <div className="testimonial-main-container container-fluid mt-5 customMargin">
      <div className="testimonial-container">
        {testimonialData &&
          testimonialData.map((item, index) => (
            <div key={`item-${index + 1}`} className="carousel-card">
              <div className="carousel-content">
                <img className="image-thumbnail-testimonial" src={item.image} alt="" />
                <div className="testimonial-details">
                  <div className="testimonial-info">
                    <div className="carousel-ratting">
                      {[...Array(item.rating)].map((rate, index) => (
                        <IoIosStar key={`rates-${index + 1}`} />
                      ))}
                    </div>
                    <h6>{item.comment}</h6>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="testimonial-button-wrapper">
        <div onClick={() => moveItem()} className="testimonial-button arrow-back">
          <IoIosArrowBack />
        </div>
        <div onClick={() => moveItem()} className="testimonial-button arrow-forward">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
