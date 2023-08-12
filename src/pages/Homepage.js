import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Profile from '../components/Profile'
import { Link } from 'react-router-dom'
import { client } from '../lib/client'
import { format } from 'date-fns'

const Homepage = () => {
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
        setPosts(data.slice(0, 3))
      })
      .catch(console.error)
  }, []);


  return (
    <>
      {!posts ? <h2 className='text-2xl text-slate-950'>Loading...</h2> :
        <>
          {posts[0] && <Link to={`/blog/${posts[0].slug.current}`}>
            <section className='max-w-7xl mx-auto px-5 my-20'>
              <article className='relative'>
                {posts[0].mainImage &&
                  <img
                    src={posts[0].mainImage.asset.url}
                    alt={posts[0].mainImage.alt}
                    className='h-96 w-full object-cover rounded-2xl'
                  />
                }

                <div className='absolute bottom-8 left-8'>
                  <h1 className='text-4xl lg:text-5xl mb-6 text-white capitalize'>{posts[0].title}</h1>
                  <p className='text-slate-200 mb-8 md:w-1/2'>{`${posts[0]?.body[0]?.children[0]?.text.substring(0, 200)}...`}</p>
                  <Link to={`/blog/${posts[0].slug.current}`} className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200'>Read More</Link>
                </div>
              </article>
            </section>
          </Link>}
        </>
      }

      <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-20'>
        {posts.map((post) => (
          <Link key={post.slug.current} to={`/blog/${post.slug.current}`}>
            <article className='border border-slate-400 rounded-lg overflow-hidden hover:bg-slate-200 transition-all duration-200'>
              {post.mainImage &&
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                  loading='lazy'
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
        <Link to='/blog' className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 capitalize'>Read all blog posts</Link>
      </div>

      <Newsletter />
      <Profile />
      <Footer />
    </>
  )
}

export default Homepage