import { ProductCardContainer, DiscountContainer, ImgContainer, Footer, Name, Price, DiscountPrice } from "./product-card.styles";
import Button from "../button/button.component";


const ProductCard = ({ product }) => {
    const { name, imageUrl, price, discount } = product

    const discountedPrice = price - (price * (discount / 100))
    return (
        <ProductCardContainer>
            <DiscountContainer>

                -{discount}%

            </DiscountContainer>
            <ImgContainer imageUrl={imageUrl}>

                <Footer>
                    <Name>{name}</Name>
                    <Price>${price.toFixed(2)}</Price>
                    <DiscountPrice><span>Total:</span>${discountedPrice.toFixed(2)}</DiscountPrice>
                </Footer>
                <Button>Add to card</Button>
            </ImgContainer>
        </ProductCardContainer>
    )
}
export default ProductCard