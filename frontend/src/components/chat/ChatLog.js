import React from 'react'
import { useParams } from 'react-router-dom'

const ChatLog = () => {
    const {name} = useParams()
  return (
    <>
        <div className='h-[10%] flex justify-between items-center pt-2 pb-3 px-4 border-b'>
            <div className='text-xl font-semibold flex items-center'>
                <img class="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>              
                <div className='ms-2'>
                    <div>{name}</div>
                    <div className='text-sm font-normal flex items-center'>
                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full'></div>
                        <div className='ms-1'>Online</div>
                    </div>
                    {/* <div className='text-sm font-normal flex items-center'>
                        <div className='w-[10px] h-[10px] bg-red-500 rounded-full'></div>
                        <div className='ms-1'>Left 1m ago</div>
                    </div> */}
                </div>
            </div>
            <div className='w-[10%] flex items-center justify-between'>
                <div className='rounded-full p-1 cursor-pointer hover:bg-slate-200 hover:transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                </div>
                <div className='rounded-full p-1 cursor-pointer hover:bg-slate-200 hover:transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
                </div>
                <div className='rounded-full p-1 cursor-pointer hover:bg-slate-200 hover:transition-all'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                </div>
            </div>
        </div>

        {/* main chat option */}
        <div className='py-2 px-4 h-[80%] overflow-scroll'>
            
            {/* self */}
            <div className='my-5'>
                <div className='flex items-end justify-end'>
                    <div className='max-w-[40%] p-2 px-3 bg-blue-500 text-white text-sm font-medium rounded-md'>
                         boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box 
                    </div>
                    <div className='ms-2'>
                        <img class="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                </div>
            </div>

            {/* other */}
            <div className='my-5'>
                <div className='flex items-end'>
                    <div className=''>
                        <img class="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                    <div className='ms-2 max-w-[40%] p-2 px-3 text-sm bg-slate-300 font-medium rounded-md'>
                         boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box boxtext boxtext boxtext boxtext boxtext box 
                    </div>
                </div>
            </div>

            {/* self */}
            <div className='my-5'>
                <div className='flex items-end justify-end'>
                    <div className='max-w-[40%] p-2 px-3 bg-blue-500 text-white text-sm font-medium rounded-md'>
                            boxtext box boxtext
                    </div>
                    <div className='ms-2'>
                        <img class="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                </div>
            </div>

        </div>

        {/* Message input section */}
        <div className='h-[10%] py-2 px-4 flex justify-between items-center z-10'>
            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <form className='ms-2 w-full'>   
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <input type="search" id="search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write message..." required/>
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>

    </>
  )
}

export default ChatLog