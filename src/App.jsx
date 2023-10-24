import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./Index.css";
import Background from './assets/Background/Background'
import NavigationBar from './assets/NavBar/NavigationBar'
import MainAbout from './assets/About/MainAbout'
import MainServices from './assets/Ourservices/MainServices'
import MainShop from './assets/Shop/MainShop'
import Contact from './assets/Contact/Contact'
import SIgnIn from './assets/Forms/SIgnIn'
import SignUp from './assets/Forms/SignUp'
import { createContext, useState } from 'react';

export const UserAuth = createContext()

function App() {
  const [User, setUser] = useState(null)

  return (
    <UserAuth.Provider value={{User, setUser}}>
      <>

        {/* <Background /> */}
        <Routes>
          <Route path='/' element={<Background />} />
          <Route path='/MainAbout' element={<MainAbout />} />
          <Route path='/MainServices' element={<MainServices />} />
          <Route path='/MainShop' element={<MainShop />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/SIgnin' element={<SIgnIn />} />
          <Route path='/SIgnUp' element={<SignUp />} />
        </Routes>
        {/* <NavigationBar /> */}

      </>
    </UserAuth.Provider>
  )
}


export default App
