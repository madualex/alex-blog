import React from 'react'

const Newsletter = () => {
  return (
    <>
      {/* While working with tailwind, the moment you specify a styling based on a screen size, it doesn't matter what the current screen size you're on, the browser will immediately render the UI based on that specified screen size. For instance, if while writing a style without any specific styling, that's what you have on the UI but the momnet you specify a styling for let's say for a small screen size while your browser was on a full width screen size, what you will see on the UI is the specified style for the small screen size even though you're on a large screen size. The reason for this is that screen sizes in tailwind is denoted as minimun. What that means is that a small screen size underneath the hood is actually minimum-width: 320px rather than width: 320px. The minimum-width property means that the styling was to be applied beginning from 320px and above. So, except another screen size or minimum-width was specified, that initial minimum-width/screen size would be applied on the browser.*/}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-900 to-slate-800">
        <div className='max-w-4xl mx-auto grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-2 md:gap-16 md:place-items-center'>
          <article>
            <h2 className="text-white text-3xl lg:text-4xl mb-4">Sign up to the newsletter</h2>
            <p className='text-slate-100'>Receive the latest updates. No spam, unsubscribe anytime!</p>
          </article>
          <article>
            <form action="">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
                className='w-full py-2 px-4 rounded shadow mb-4 bg-transparent border border-slate-200 placeholder-slate-300 tracking-wide'
              />
              <button
                type="submit"
                className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 w-full md:w-auto'
              >
                Subscribe
              </button>
            </form>
          </article>
        </div>
        
      </section>
    </>
  )
}

export default Newsletter
