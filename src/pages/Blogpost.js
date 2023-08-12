import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { client } from '../lib/client'
import { format } from 'date-fns'
import { PortableText } from '@portabletext/react'
import Profile from '../components/Profile'

const Blogpost = () => {
  const [singlepost, setSinglepost] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client.fetch(`*[slug.current == "${slug}"] {
      title,
      slug,
      body,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      },
      "name": author -> name
    } `)
      .then((data) => {
        setSinglepost(data[0])
        console.log(data)
      })
      .catch(console.error)
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${singlepost.title}`
  }, [singlepost.title])

  return (
    <>
      {singlepost &&
        <section className='py-20 px-5 max-w-3xl mx-auto'>
          {singlepost.mainImage &&
            <img
              src={singlepost.mainImage.asset.url}
              alt={singlepost.mainImage.alt}
              loading='lazy'
              className='h-2/3 w-full object-cover rounded-lg shadow'
            />}
          <h1 className='md:text-5xl  my-8 capitalize'>{singlepost.title}</h1>
          {singlepost.publishedAt &&
            <p className='font-bold text-sm mb-8'>By {singlepost.name} &middot; {format(new Date(singlepost.publishedAt), "dd MMMM yyyy")}</p>
          }

          <PortableText value={singlepost.body} />
          <div className='max-w-7xl mx-auto mt-10 px-5 mb-20 flex justify-end'>
            <Link to='/blog' className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 capitalize'>Read More blog posts</Link>
          </div>
          <Profile />
        </section>
      }
    </>
  )
}

export default Blogpost