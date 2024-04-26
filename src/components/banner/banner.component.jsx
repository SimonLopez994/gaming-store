import { ButtonComponent } from "../button/button.styles"
import { Title, Subtitle, BannerContainer } from "./banner.styles"

const Banner = () => {
    return (
        <BannerContainer>
            <Title>
                Explore the World of Gaming!
            </Title>
            <Subtitle>
                Your Destination for the Best Console Games
            </Subtitle>
            <ButtonComponent children='Explore Games'/>
        </BannerContainer>
    )
}
export default Banner