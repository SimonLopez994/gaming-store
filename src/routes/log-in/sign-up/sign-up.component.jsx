import { useState } from "react";
import { createAuthWithEmailAndPassword, createUserDocFromAuth } from '../../../utils/firebase.utils.js'
import FormInput from '../../../components/form-input/form-input.component.jsx'
import { SignupContainer, ButtonsContainer } from './sign-up.styles.jsx';
import Button from '../../../components/button/button.component.jsx';
import Alert from "../../../components/alert-component/alert.component.jsx";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {

    const [formField, setFormField] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formField;
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState(false);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setAlertMessage('Passwords do not match')
            return;
        }

        try {
            const { user } = await createAuthWithEmailAndPassword(email, password);

            await createUserDocFromAuth(user);
            setAlertMessage('Account created successfully');
            setFormField(defaultFormField)
            setAlertType(true)

            setTimeout(() => {
                setAlertMessage('')
            }, 2500)


        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setAlertMessage('email-already-in-use');
                    setAlertType(false)
                    break;
                case 'auth/invalid-email':
                    setAlertMessage('auth/invalid-email');
                    setAlertType(false)
                    break;
                case 'auth/weak-password':
                    setAlertMessage('auth/weak-password');
                    setAlertType(false)
                    break;
                case 'auth/network-request-failed':
                    setAlertMessage('auth/network-request-failed');
                    setAlertType(false)
                    break;
                default:
                    setAlertMessage('Invalid Credentials');
                    setAlertType(false)

            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormField({ ...formField, [name]: value })
    }


    return (
        <SignupContainer>
            <h2>Dont have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="DisplayName" type="text" onChange={handleChange} required name="displayName" value={displayName} />

                <FormInput label="Email" type="email" onChange={handleChange} required name="email" value={email} />

                <FormInput label="Password" type="password" onChange={handleChange} required name="password" value={password} />

                <FormInput label="Confirm Password" type="password" onChange={handleChange} required name="confirmPassword" value={confirmPassword} />

                <ButtonsContainer>
                    <Button type="submit">Sign Up</Button>
                    {alertMessage && <Alert type={alertType}>{alertMessage}</Alert>}
                </ButtonsContainer>

            </form>
        </SignupContainer>
    )
}
export default SignUp;