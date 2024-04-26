import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Ul, MenuContainer, MenuOptions, LinkComponent, HeaderContent, MenuInfoContainer, IconWrapper } from "./navigation.styles";
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const navigateTo = () => navigate('/auth')
    const setIsOpenState = () => setIsOpen(!isOpen)
    return (
        <Header>
            <HeaderContent>
                <IconWrapper>
                    <svg cursor='pointer' fill="white" style={{ padding: '7px', backgroundColor: 'rgba(0, 138, 255, 0.9)', borderRadius: '20px' }} onClick={setIsOpenState} height='1.5rem' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </IconWrapper>

                <MenuContainer>

                    <MenuOptions isOpen={isOpen}>
                        <Ul>
                            <svg cursor='pointer' fill="rgba(0, 159, 213, 0.9)" style={{ marginLeft: '10rem' }} height='1.6rem' onClick={setIsOpenState} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                            <LinkComponent>Home</LinkComponent>
                            <LinkComponent>Playstation 5</LinkComponent>
                            <LinkComponent>Playstation 4</LinkComponent>
                            <LinkComponent>Ofertas</LinkComponent>
                            <LinkComponent>Mi cuenta</LinkComponent>
                        </Ul>
                    </MenuOptions>
                </MenuContainer>
                <MenuInfoContainer>
                    <IconWrapper onClick={navigateTo}>
                        <svg height='1.2rem' fill="white" style={{ padding: '10px', backgroundColor: 'rgba(0, 138, 255, 0.9)', borderRadius: '10px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    </IconWrapper>
                    <IconWrapper>
                        <svg height='1.2rem' fill="white" style={{ padding: '10px', backgroundColor: 'rgba(0, 138, 255, 0.9)', borderRadius: '10px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                    </IconWrapper>

                </MenuInfoContainer>
            </HeaderContent>
        </Header>
    )
}

export default Navigation;