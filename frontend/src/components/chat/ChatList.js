import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ChatList = () => {
    const name = "Tanvir Mahmud"
  return (
    <div className='h-full flex'>
        <div className='w-[350px] h-full border-r'>
            <div className='h-[15%] p-2 z-10 flex flex-col justify-center items-center'>
                <div className='w-full text-center font-bold text-2xl'>Messages</div>
                <form class="w-full flex items-center mt-4">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search users..." required/>
                    {/* <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button> */}
                </form>
            </div>
            
            {/* chat list */}
            <div className='h-[85%] overflow-scroll px-2'>
                <ul className='my-3'>
                    <Link to={`messages/chat/${name}`}>
                        <li className='mb-3 rounded-lg overflow-hidden cursor-pointer hover:bg-slate-200'>
                            <div className='p-2'>
                                <div class="flex min-w-0 gap-x-2">
                                    <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                    <div class="min-w-0 flex-auto">
                                        <p class="text-sm font-semibold truncate leading-6 text-gray-900">{name}</p>
                                        <div class="mt-1 text-xs leading-5 flex items-center text-gray-500">
                                            <div className='h-2 w-2 rounded-full bg-green-600'></div>
                                            <div className='ms-1'>Online</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <li className='mb-3 rounded-lg overflow-hidden cursor-pointer hover:bg-slate-200'>
                        <div className='p-2'>
                            <div class="flex min-w-0 gap-x-2">
                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                <div class="min-w-0 flex-auto">
                                    <p class="text-sm font-semibold truncate leading-6 text-gray-900">Courtney Henry</p>
                                    <div class="mt-1 text-xs leading-5 flex items-center text-gray-500">
                                        <div className='h-2 w-2 rounded-full bg-red-300'></div>
                                        <div className='ms-1'>Left 5m ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        {/* chat log render here */}
        <div className='w-full h-full'>
            <Outlet/>
        </div>
    </div>
  )
}

export default ChatList