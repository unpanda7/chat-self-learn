import React from 'react'
import ChatHeader from './chat-header'
import Messages from './messages'

const Chat = () => {
  return (
    <div className='flex flex-col min-w-0 h-dvh bg-background'>
      <ChatHeader />
      <Messages />
      <form className='flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl'>
        <input />
      </form>

      
    </div>
  )
}

export default Chat