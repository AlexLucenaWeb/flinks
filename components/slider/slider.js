import Slider from "react-slick";
import SliderImage from './slider_image'

import image1 from '../../public/assets/images/galeria/flinks1.jgp'

const GallerySlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <SliderImage image={image1.src} />
    </Slider>
  );
}

export default GallerySlider