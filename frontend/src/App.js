// import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPageImg from './assets/LoginPage.jpg'
import ChatApp from "./pages/ChatApp";
import SignUpPage from "./components/app/SignUpPage";
import LoginForm from "./components/app/LoginForm";
import ForgetPasswordPage from "./components/app/ForgetPasswordPage";
import { useState } from "react";


function App() {

  const [user, setUser] = useState(true)

  return (
    <div className="App">
      <Router>
        {user?<>
          <ChatApp/>
        </>:<>
          <div className='h-screen'>
            <div className='h-full md:w-screen grid md:grid-cols-2 bg-white'>
                <div className='hidden md:flex items-center justify-center'>
                    <img className='w-full' src={LoginPageImg} alt='welcome_img'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className=' w-[90%] sm:w-[80%] mb-6 font-bold text-2xl'>
                        <div className='flex justify-center text-center text-red-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 flex items-center justify-center">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>

                            <div className='ms-2'>We Talk</div>
                        </div>
                        <div className='text-sm font-normal text-gray-600 text-center mt-3'>Connected with people you love</div>
                    </div>
                    <Routes>
                      <Route path="/" element={<LoginForm/>}/>
                      <Route path="/signup" element={<SignUpPage/>}/>
                      <Route path="/forgetpassword" element={<ForgetPasswordPage/>}/>
                    </Routes>
                </div>
            </div>
          </div>
        </>} 
      </Router>
    </div>
  );
}

export default App;

