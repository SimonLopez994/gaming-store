import { ButtonComponent } from "./button.styles"
const Button = ({children, ...otherProps}) => {
    return(
        <ButtonComponent {...otherProps}>{children}</ButtonComponent>
    )
}

export default Button