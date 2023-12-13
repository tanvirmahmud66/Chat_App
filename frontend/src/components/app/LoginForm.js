import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {

    // ---------------------------- Login Form functionality here ------------------------
    

  return (
                <form className="w-[90%] sm:w-[80%]">
                    <div className='flex mb-5'>
                        <div className='text-lg font-medium'>Login</div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <div className='flex'>
                            <div className="flex items-center h-5 cursor-pointer">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" className="ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <Link to='/forgetpassword' className='text-sm font-medium text-blue-500 cursor-pointer'>
                            Forget password?
                        </Link>
                    </div>
                    <div className='sm:flex justify-between items-center'>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <div className='ms-2 text-sm font-medium text-center mt-4 sm:mt-0'>
                            Don't have an account? <Link to='/signup' className='text-green-500 cursor-pointer'>Signup</Link>
                        </div>
                    </div>
                </form>
  )
}

export default LoginForm