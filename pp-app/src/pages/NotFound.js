import React, { useEffect } from 'react'

const NotFound = () => {
      useEffect(() => {
            window.scrollTo(0, 0)
            document.body.style.overflow = 'hidden';
            return () => {
                  document.body.style.overflow = 'auto';
            };
      }, [])
      return (
            <div className='min-h-screen md:sticky md:top-0 white-tx pb-6 p-4'>
                  <div className='container mx-auto'>
                        <h2 className="pt-20 2xl:text-[120px] xl:text-8xl lg:text-7xl md:text-5xl text-4xl font-normal tracking-tighter white-tx">
                              404
                        </h2>
                        <p className="pt-20 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-normal tracking-tighter white-tx">
                              page not found
                        </p>
                  </div>
            </div>
      )
}

export default NotFound