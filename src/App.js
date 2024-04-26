import './App.styles.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/log-in/sign-in/sign-in.component.jsx';
import Authentication from './routes/log-in/authentication.component.jsx';



const App = () => {

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Navigation />} />
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Routes>
      

     

    </div>
  )
}
export default App;
