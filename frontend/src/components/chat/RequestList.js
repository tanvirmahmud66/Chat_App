import React from 'react'

const RequestList = () => {
  return (
    <div className='h-full'>
        <div className='h-[10%] p-2 z-10 flex flex-col justify-center items-center'>
            <div className='w-full text-center font-bold text-2xl'>Message Requests</div>
            
        </div>
        
        {/* chat list */}
        <div className='h-[90%]'>
            Message Request List
        </div>
    </div>
  )
}

export default RequestList