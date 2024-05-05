import './authentication.styles.jsx'
import { AuthenticationContainer, VideoContainer } from './authentication.styles.jsx';
import SignIn from './sign-in/sign-in.component';
import SignUp from './sign-up/sign-up.component';
import VideoAuth from '../../videos/spiderman-video-1.mp4'


const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignIn />
            <SignUp />
        </AuthenticationContainer>
    )
}
export default Authentication;