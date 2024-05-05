
import { Slider, ImageContainer, ReproductionBar } from './home.styles.jsx';

import GOWImage from '../../images/soldiers-military-operation-red-background-2048x2048-5462.jpg';
import HorizonImage from '../../images/shop.jpg';
import Battlefield from '../../images/battlefield.png'
import AssasinImage from '../../images/assasin.jpg';
import CyberPunk from '../../images/cyberPunk.jpeg'
import { useEffect, useRef, useState } from 'react';
import Banner from '../../components/banner/banner.component.jsx';
import gsap from 'gsap';


const images = [GOWImage, HorizonImage, AssasinImage, Battlefield, CyberPunk];

const Home = () => {

    const slider = useRef(null);
    const repBarRef = useRef(null);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        if (imageIndex === 5) {

            gsap.set(slider.current, {
                x: 0,
            })

        } else {
            gsap.to(slider.current, {
                x: -imageIndex * window.innerWidth,
                duration: 0.3,
                ease: 'power1.inOut',
            });
        }
    }, [imageIndex]);


    useEffect(() => {

        if (imageIndex === 0) {
            gsap.set(repBarRef.current, {
                width: '0%',
                
            })
        }
        gsap.to(repBarRef.current, {
            width: '100%',
            duration: 3,
            repeat: true,
        })
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
        }, 3000);

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
            <Banner />
            <ReproductionBar ref={repBarRef}></ReproductionBar>
        </div>
    )
}

export default Home