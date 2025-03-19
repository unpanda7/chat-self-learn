import React from 'react'
import { useChat } from '@ai-sdk/react'

const Messages = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className='flex flex-col gap-2 px-4 py-6 overflow-y-auto'>
      {messages.map((message, index) => (
        <div key={index}>{message.content}</div>
      ))}
    </div>
  )
}

export default Messages