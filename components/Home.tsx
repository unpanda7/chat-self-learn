"use client"

import React from 'react'
import dynamic from "next/dynamic";
import { useChat } from '@ai-sdk/react'

export function Loading() {
  return <div>Loading...</div>
}

/**
 * chat
 * left sider
 * right chat conent 
 */
const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home