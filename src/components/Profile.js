import {FaTwitter, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import profile from '../assets/profile.png'

const Profile = () => {
  return (
    <>
      <div className='max-w-2xl border-t my-20 mx-auto grid grid-cols-1 md:gap-8 md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden'>
        <article>
          <img
            src={profile}
            alt="Alex"
            className='md:h-56 md:object-cover'
          />
        </article>
        <article className='p-8 md:p-0 md:pr-8'>
          <h3 className='text-xl mb-4'>Madu Alex</h3>
          <p>A Lagos-Nigerian based web designer and front-end developer specialized in React and NextJs</p>
          <ul className='flex justify-start gap-4 mt-4'>
            <Link to='/'><FaTwitter className='text-xl text-slate-600 hover:text-slate-800' /></Link>
            <Link to='/'><FaLinkedin className='text-xl text-slate-600 hover:text-slate-800'/></Link>
          </ul>
        </article>
      </div>
    </>
  )
}

export default Profile