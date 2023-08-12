import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../lib/client'
import { format } from 'date-fns'

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "post"] {
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
    } | order(publishedAt desc)`)
      .then((data) => {
        setPosts(data)
      })
      .catch(console.error)
  }, []);
  return (
    <>
      <div className='max-w-7xl px-5 mx-auto mt-20 mb-10'>
        <h1 className='text-4xl lg:text-5xl mb-6 capitalize'>All Blog Posts</h1>
      </div>
      <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-20'>
        {posts.map((post) => (
          <Link key={post.slug.current} to={`/blog/${post.slug.current}`}>
            <article className='border border-slate-400 rounded-lg overflow-hidden hover:bg-slate-200 transition-all duration-200'>
              {post.mainImage &&
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                loading='lazy'
                className='w-full md:h-64 object-cover'
                />
              }
              <div className='p-4'>
                <p className='text-sm'>By {post.name} &middot; {format(new Date(post.publishedAt), "dd MMMM yyyy")}</p>
                <h2 className='text-xl my-2 capitalize'>{post.title}</h2>
                <p className='text-sm leading-relaxed'>{`${post?.body[0]?.children[0]?.text.substring(0, 200)}...`}</p>
              </div>
            </article>
          </Link>
        ))}

      </section>

      <div className='max-w-7xl mx-auto px-5 mb-20 flex justify-end'>
        <Link to='/' className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 capitalize'>Back to Homepage</Link>
      </div>
    </>
  )
}

export default Blog