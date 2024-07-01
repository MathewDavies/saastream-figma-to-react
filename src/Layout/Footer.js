import React from 'react'

function Footer() {
  return (
    <footer className='max-w-[1200px] mx-auto p-10'>
    
    <div className='flex sm_t:flex-row sm_t:flex-wrap lg_t:flex-nowrap flex-col justify-between sm_t:px-0'>
      {/* Icon and description */}
      <div className='w-full order-1 lg_t:order-1 sm_t:w-1/2 lg_t:w-1/3 sm_t:mb-20 lg_mob:p-4'>  
        <div className='flex gap-2'>
        <img  className="h-8 mt-2" src="icons/logo.svg" alt="Saastream Icon" />
        <span className='font-bold mb-0 py-2 text-white text-base '>SaaStream</span>
      </div>
        <p className='text-white text-sm'>Our vision is to empower businesses with intuitive and efficient software solutions that foster innovation and drive success.</p>
      </div>
      {/* Links */}
      <div className='w-full order-3 lg_t:order-2 sm_t:w-full flex-col lg_t:w-1/3 flex  lg_mob:flex-row justify-center lg_t:gap-8 gap-16 p-4'>  
        
        <div className='flex flex-col items-center lg_mob:items-start gap-3'>
          <h4 className='text-white text-3xl'>Quick Links</h4>
          <a className="footer-link" href="/pageThree">About </a>
          <a className="footer-link" href="/pageThree">Features </a>
          <a className="footer-link" href="/pageThree">Pricing </a>
          <a className="footer-link" href="/pageThree">Contact </a>
        </div>
        <div className='flex flex-col items-center lg_mob:items-start gap-3'>
          <h4 className='text-white text-3xl'>Resources</h4>
          <a className="footer-link" href="/pageThree">Newsletter </a>
          <a className="footer-link" href="/pageThree">Community </a>
          <a className="footer-link" href="/pageThree">Whatsapp</a>
          <a className="footer-link" href="/pageThree">Member </a>
        </div>
      </div>
      {/* Subscribe */}
      <div className=' hidden md_mob:block w-full order-2 lg_t:order-1 sm_t:w-1/2 lg_t:w-1/3 sm_t:mb-20 p-4'>  
        <p className='text-white font-bold sm_t:font-normal'> Subscribe to our blog</p>
        <p className='text-white'> Subscribe now to get exclusive insights in to the Artifical Intelligence Industry</p>
        <div className='bg-white px-1 py-2 rounded-[4rem] flex justify-between mt-8 '>
        <input placeholder="Enter your email" className="ml-4 mr-1 w-full focus:outline-gray-200" type="email" />
        <button className='bg-cardBGDarkGrey hover:bg-cardBGGrey py-4 px-6 text-white rounded-[4rem]'>Subscribe</button>
        </div>
      </div> 
    </div>


    <div className='bg-white w-full h-[1px] mt-10' />
  <div className='flex flex-col md_mob:flex-row md_mob:justify-between my-10'>
    
    <h4 className='mr-4 text-white inline'>2024 Saastream All Rights Reserved </h4>
    <span className='flex gap-2'>social icons here
      <img className="w-10 h-10" src="icons/facebook.svg" alt="facebook icon" />
      <img className="w-10 h-10" src="icons/instagram.svg" alt="Instagram icon" />
      <img className="w-10 h-10" src="icons/x-twitter.svg" alt="X or Twitter icon" />
    </span>
  </div>
  </footer>
  )
}

export default Footer