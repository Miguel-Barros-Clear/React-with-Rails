import Todo from '@/components/todo'
import Head from 'next/head'
import React from 'react'

export default function Index() {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#131516] text-[#fcfcfc]'>
      <Head>
        <title>Todo App</title>
      </Head>
      <main className='w-11/12 h-5/6 rounded-lg flex items-center justify-center flex-col mt-5 bg-[#131516]'>
        <h1 className='text-4xl font-bold'>ToDo list app</h1>
        <p className='text-sm text-gray-400'>Your to-do list is:</p>
        <Todo />
      </main>
    </div>
  )
}
