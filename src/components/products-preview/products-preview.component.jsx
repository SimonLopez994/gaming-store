import ProductCard from "../product-card/product-card.component";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { ProductsContainer, Title, TitleContainer, ProductsPreviewContainer, ProductsContent } from "./products-preview.styles"

const ProductsPreview = ({ title, products }) => {
    const sliderContainerRef = useRef(null);
    const [productIndex, setProductIndex] = useState(0);

    const moveLeft = () => {
        setProductIndex((prevIndex) => {
            if(productIndex === 0){
                return prevIndex
            }else{
                return prevIndex - 1
            }
           
        })
    }

    useEffect(() => {
        gsap.to(sliderContainerRef.current, {
            x: productIndex * 200,
            duration: 0.3,
            ease: 'power1.inOut',
        })
    }, [productIndex])


    const moveRight = () => {
        setProductIndex((prevIndex) => {
            if(productIndex === 4){
                return prevIndex
            }else{
                return prevIndex + 1
            }
           
        })
    }

    useEffect(() => {
        gsap.to(sliderContainerRef.current, {
            x: productIndex * -200,
            duration: 0.3,
            ease: 'power1.inOut',
        })
    }, [productIndex])
    return (
        <ProductsPreviewContainer>
            <TitleContainer>
                <svg height='2.5rem' fill="rgba(0, 100, 255, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9 .6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z" /></svg>
                <Title>{title}</Title>
            </TitleContainer>
            <ProductsContainer>
                <svg onClick={moveLeft} height='1.7rem' fill="white" xmlns="http://www.w3.org/2000/svg" style={{ cursor:'pointer', position: 'absolute', top: '40%', left: "-3%", zIndex: '10000' }} viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" /></svg>
                <ProductsContent ref={sliderContainerRef}>
                    {products.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </ProductsContent>
                <svg onClick={moveRight} height='1.7rem' fill="white" xmlns="http://www.w3.org/2000/svg" style={{ cursor:'pointer', position: 'absolute', top: '40%', right: "-3%", zIndex: '10000' }} viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" /></svg>
            </ProductsContainer>
        </ProductsPreviewContainer>
    )
}

export default ProductsPreview