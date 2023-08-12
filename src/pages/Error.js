import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <section className='flex items-center justify-center h-screen text-center px-5'>
        <article className='max-w-4xl mx-auto'>
          <h1 className='text-4xl lg:text-5xl mb-8'>Oops! You found a page that doesn't exist.</h1>
          <p className='mb-8 w-auto'>You seem to have discovered a page on our website that either doesn't exists or may have moved.</p>
        </article>
        <Link to='/' className='underline text-slate-600'>Back to Homepage</Link>
      </section>
    </>
  )
}

export default Error