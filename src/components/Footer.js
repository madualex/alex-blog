import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='border-t border-slate-400 max-w-7xl mx-auto py-10 text-center'>
        <h3>Share across social media</h3>
        <ul className='flex justify-center gap-4 flex-wrap text-sm text-slate-600 mt-4'>
          <Link>Facebook</Link>
          <Link>Instagram</Link>
          <Link>Threads</Link>
          <Link>Twitter</Link>
          <Link>LinkedIn</Link>
        </ul>
      </footer>
    </>
  )
}

export default Footer