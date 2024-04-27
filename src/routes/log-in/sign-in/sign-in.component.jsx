import { useState } from "react";
import { signInWithGooglePopup, signInUserAuthWithEmailAndPassword } from "../../../utils/firebase.utils";
import Button from '../../../components/button/button.component';
import { SignInContainer, ButtonsContainer } from "./sign-in.styles";
import FormInput from "../../../components/form-input/form-input.component";
import Alert from "../../../components/alert-component/alert.component";




const defaultFormField = {
    email: '',
    password: '',
}


const SignIn = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField;
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState(false);


    console.log(formField)

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        setAlertMessage('Signed succesfully');
        setFormField(defaultFormField)
        setAlertType(true);
        setTimeout(() => {
            setAlertMessage('')
        }, 2500)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const { user } = await signInUserAuthWithEmailAndPassword(email, password)

 
                setAlertMessage('Signed succesfully');
                setFormField(defaultFormField)
                setAlertType(true);
                setTimeout(() => {
                    setAlertMessage('')
                }, 2500)
            

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    setAlertMessage('incorrect password for email');
                    setAlertType(false)
                    break
                case 'auth/user-not-found':
                    setAlertMessage('no user associated with this email');
                    setAlertType(false)
                    break
                case 'auth/invalid-credential':
                    setAlertMessage('invalid credentials');
                    setAlertType(false)
                    break
                case 'auth/weak-password':
                    setAlertMessage('Password should be at least 6 characters');
                    setAlertType(false)
                    break
                    case 'auth/popup-closed-by-user':
                    setAlertMessage('auth/popup-closed-by-user');
                    setAlertType(false)
                    break
                    default:
                        setAlertMessage('An error happened');
                        setAlertType(false)
                      


            }

            setTimeout(() => {
                setAlertMessage('')
            }, 2500)


        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormField({ ...formField, [name]: value })
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" onChange={handleChange} required name="email" value={email} />

                <FormInput label="Password" type="password" onChange={handleChange} required name="password" value={password} />
              
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle}>Google Sign In</Button>
                    {alertMessage && <Alert type={alertType}>{alertMessage}</Alert>}
                </ButtonsContainer>

            </form>
        </SignInContainer>
    )
}
export default SignIn;