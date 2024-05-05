import './App.styles.jsx';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/log-in/sign-in/sign-in.component.jsx';
import Authentication from './routes/log-in/authentication.component.jsx';
import Shop from './routes/shop/shop.component.jsx';
import { addCollectionAndDocuments } from './utils/firebase.utils.js';
import GAMES from './games-data.js';



const App = () => {
  useEffect(() => {
    addCollectionAndDocuments("games", GAMES)
  }, [])
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Navigation />} />
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
      </Routes>




    </div>
  )
}
export default App;
