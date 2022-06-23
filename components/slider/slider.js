import Slider from "react-slick";
import SliderImage from './slider_image'
import ReviewArrow from "./review_arrow";

import image1 from "../../public/assets/images/galeria/flinks1.jpg"
import image2 from "../../public/assets/images/galeria/flinks2.jpg"
import image3 from "../../public/assets/images/galeria/flinks3.jpg"
import image4 from "../../public/assets/images/galeria/flinks4.png"
import image5 from "../../public/assets/images/galeria/flinks5.jpg"
import image6 from "../../public/assets/images/galeria/flinks6.jpg"
import image7 from "../../public/assets/images/galeria/flinks7.jpg"
import image8 from "../../public/assets/images/galeria/flinks8.jpg"
import image9 from "../../public/assets/images/galeria/flinks9.jpg"
import image10 from "../../public/assets/images/galeria/flinks10.png"
import image11 from "../../public/assets/images/galeria/flinks11.jpg"
import image12 from "../../public/assets/images/galeria/flinks12.jpg"
import image13 from '../../public/assets/images/galeria/flinks13.jpg'
import image14 from "../../public/assets/images/galeria/flinks14.jpg"
import image15 from "../../public/assets/images/galeria/flinks15.jpg"
import image16 from "../../public/assets/images/galeria/flinks16.jpg"
import image17 from "../../public/assets/images/galeria/flinks17.jpg"
import image18 from "../../public/assets/images/galeria/flinks18.jpg"
import image19 from "../../public/assets/images/galeria/flinks19.jpg"
import image20 from "../../public/assets/images/galeria/flinks20.jpg"
import image21 from "../../public/assets/images/galeria/flinks21.jpg"
import image22 from "../../public/assets/images/galeria/flinks22.jpg"
import image23 from "../../public/assets/images/galeria/flinks23.jpg"
import image24 from "../../public/assets/images/galeria/flinks24.jpg"
import image25 from "../../public/assets/images/galeria/flinks25.jpg"
import image26 from "../../public/assets/images/galeria/flinks26.jpg"


const images_data = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26,
]

const GallerySlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ReviewArrow direction="next"/>,
    prevArrow: <ReviewArrow direction="prev"/>,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },      
    ]
  };

  return (
    <Slider {...settings}>
      {images_data.map((imagelink, index) => (
        <SliderImage image={imagelink.src} key={index} />
      ))}
    </Slider>
  );
}

export default GallerySlider