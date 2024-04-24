import logo from './logo.svg';
import './App.styles.jsx';
import { Slider, NavigationComponent, ImageContainer } from './App.styles.jsx';

import GOWImage from '../src/images/god-of-war.jpg';
import HorizonImage from '../src/images/horizon.jpg';
import AssasinImage from '../src/images/assasin.jpg'
import { useEffect, useRef, useState } from 'react';
import Banner from './components/banner/banner.component.jsx';
import gsap from 'gsap';

const images = [HorizonImage, GOWImage, AssasinImage, HorizonImage];

const App = () => {
  const slider = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (imageIndex === 0) {
      gsap.set(slider.current, {
        x: 0,
      })
    } else {
      gsap.to(slider.current, {
        x: -imageIndex * 1637,
        duration: 0.3,
        ease: 'power1.inOut',
      });
    }
  }, [imageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0; // Vuelve a la primera imagen
        } else {
          return prevIndex + 1; // Incrementa el índice
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);



  return (
    <div>
      <Slider ref={slider}>
        {images.map((image, index) =>
        (<div key={index}>
          <ImageContainer src={image} />
        </div>)
        )}
      </Slider>
      <NavigationComponent />
      git
    </div>
  )
}
export default App;
