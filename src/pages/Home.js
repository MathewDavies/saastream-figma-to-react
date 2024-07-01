import { useState } from 'react'
import Accordion from '../Components/Accordian'
import { accordionData } from '../data/accordian'
import { Modal } from '../Components/Modal'


function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='main-container'>
      
      {/*############################################### Modal ########################################*/}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      
        
       <h3 className='text-purple-500 font-bold text-3xl mb-4'> Hi, this is a demo site...</h3>
       <p className='mb-4'>I'm Matt, a React, Next and Firebase Developer. This is a sample project, made in React, replicating a Figma design that can be found <a className="underline font-bold" href="https://www.figma.com/design/GbBuA8OApTiNzicr5SOE3Q/SaaS-Website-Landing-Page-(Community)?node-id=1-3&t=HXRf0h7G3LS82GUs-0">here</a></p>
       
       <p className='mb-4'>If you are looking for a Front End Developer, you can get it touch with me via email <a className="underline font-bold" href="mailto:mattdavies.design@outlook.com">here</a> or if you are on UpWork you can see my profile <a className='underline font-bold' href="https://www.upwork.com/freelancers/~0129070ce00331dd1a">here</a></p>
      <p className='pt-4 font-light text-purple-800 border-b-2' onClick={closeModal}>Close Modal</p>
       

        </Modal>

      {/* Hero */}
      <section className='pt-20 pb-20'>
      
      {/* background colour */}
      <div className='absolute rounded-full z-[-1]
                      w-[25%] h-[40%] 
                      top-[20%] left-[50%] 
                      bg-gradient-one 
                      opacity-80 
                       blur-4xl
                      animate-fade-in '>
      </div>
      <div className='absolute rounded-full z-[-1]
                      w-[30%] h-[60%] 
                      top-[20%] left-[30%] 
                      bg-gradient-two 
                      opacity-80 
                       blur-4xl
                       animate-fade-in '>
      </div>
      <div className='absolute rounded-full z-[-1]
                      w-[40%] h-[50%] 
                      top-[40%] left-[10%] 
                      bg-gradient-one 
                      opacity-80 
                       blur-4xl
                       animate-fade-in '>
      </div>
      <div className='absolute rounded-full z-[-1]
                      w-[40%] h-[60%] 
                      top-[25%] left-[60%] 
                      bg-gradient-one 
                      opacity-80 
                       blur-4xl
                       animate-fade-in '>
      </div>
     
      
        <div className='flex flex-col items-center'>
        <h2 className='hero-title'>Efficiency at<br className='hidden sm_t:block'></br> your Fingertips</h2>
        <p className='hero-sub-title'>With SaaStream efficiency becomes second nature, allowing you to focus on what truly matters in your business journey.</p>
        <div className='flex gap-4 mt-10'>
        <button className='button-solid' onClick={openModal}>Get Started</button>
        <button className='button-outline' onClick={openModal}>View Demo</button>
        </div>
        </div>
      </section>
      
      {/* Video */}
      <section className='py-20'> 
        <p className='text-lightGrey text-center text-4xl max-w-[800px] mx-auto my-10'>"Paving the way for limitless innovation and growth"</p>
        <div 
          className="relative flex items-center justify-center bg-cover bg-center object-cover h-[500px] rounded-xl"
          style={{ backgroundImage: "url('/youtube-thumb.png')"}}
         >

          <img className="m-auto " src="play.png" onClick={openModal} alt="Video Thumbnail" />
        </div> 
    </section>
    
    {/* ############################################### Diverse Features ############################################*/}
    <section className='pt-20 pb-20 relative'>
    <div className='absolute rounded-full z-[-1]
                      w-[55%] h-[50%] 
                      top-[5%] left-[-20%] 
                      bg-gradient-one 
                      opacity-80 
                       blur-4xl
                      animate-fade-in '>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='large-title'>Diverse Features</h2>
        <h3 className="grey-sub-title mb-20">Explore our diverse features tailored to meet the dynamic needs of modern businesses</h3>        
        <div className='flex  flex-col lg_t:flex-row gap-6 mt-10 '>
          <div className='card lg_t:w-1/3'>
            <h4 className='card-title'>Customizable Workflows</h4>
            <p className='base-text mb-6'>Easily create and modify workflows to match your unique business processes, empowering you to adapt to changing requirements with ease. Utilize drag-and-drop functionality and customizable templates to design workflows that perfectly align with your team's workflow preferences.</p>
            <p className='text-white text-sm' onClick={openModal} >Explore More <img className="inline ml-2" src='/icons/arrow.png' alt='arrow-icon' /> </p>
          </div>  
          <div className='flex flex-col sm_t:flex-row lg_t:flex-col gap-6 lg_t:w-1/3'>
            <div className='card'>
              <h4 className='card-title'>Real-time Collaborations</h4>
              <p className='base-text mb-6'>Collaborate seamlessly with real-time updates, fostering a culture of transparency and accountability.</p>
              <p className='text-white text-sm' onClick={openModal} >Explore More <img className="inline ml-2" src='/icons/arrow.png' alt='arrow-icon' /> </p>
            </div>
            <div className='card'>
              <h4 className='card-title'>Intelligent Automation</h4>
              <p className='base-text mb-6'>Utilize AI algorithms to identify opportunities for automation and optimize workflows & productivity.</p>
              <p className='text-white text-sm' onClick={openModal} >Explore More <img className="inline ml-2" src='/icons/arrow.png' alt='arrow-icon' /> </p>
            </div>
          </div>
          <div className='card lg_t:w-1/3'>
            <h4 className='card-title'>Timely Data Insights</h4>
            <p className='base-text mb-6'>Gain deep insights into your business operations with customizable analytics dashboards, providing actionable data to drive informed decision-making and identify areas for improvement. Via Visualization of  key performance indicators (KPIs) to mitigate problems.</p>
            <p className='text-white text-sm' onClick={openModal}>Explore More <img className="inline ml-2" src='/icons/arrow.png' alt='arrow-icon' /> </p>
          </div>
      </div>
    </div>
  </section>

      {/* ########################################### Plans and Billing  ######################################################*/}
  <section className='py-32 relative'>
  <div className='absolute rounded-full z-[-1]
                      w-[35%] h-[30%] 
                      top-[30%] left-[0%] 
                      bg-gradient-one 
                      opacity-90 
                       blur-4xl
                      animate-fade-in '>
      </div>
    <div className='absolute rounded-full z-[-1]
                      w-[35%] h-[30%] 
                      top-[30%] left-[65%] 
                      bg-gradient-two 
                      opacity-90 
                       blur-4xl
                      animate-fade-in '>
      </div>

  <div className='flex flex-col  items-center'>
      <h2 className='large-title'>Plans & Billing</h2>
      <h3 className="grey-sub-title mb-20">Get the best out of SaaStream with a range of plans to suit everyone.</h3>
      <div className='flex flex-col  items-center sm_t:flex-row sm_t:items-stretch gap-6 w-full'>
        <div className="card sm_t:w-1/3  lg_mob:w-[400px]  flex flex-col">
          <div className=''>
            <h4 className='plan-name'>Basic</h4>
            <h5>
              <span className='text-5xl text-white font-medium block lg_t:inline leading-[1.05]'>$99</span>
              <span className='text-white text-3xla font-light'>/Month</span>
            </h5>
            <hr />
            </div>
            <ul className='p-4 flex-grow'>
              <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> 24/7 AI driven assistance</li>
              <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> Basic issue resolution support</li>
            </ul>
            <button className='white-button mx-4 mt-4' onClick={openModal} >Get Started</button>
          </div>


          <div className="card sm_t:w-1/3  lg_mob:w-[400px]  flex flex-col">
            <div>
            <h4 className='plan-name'>Premium</h4>
            <h5>
              <span className='text-5xl text-white font-medium block lg_t:inline leading-[1.05]'>$299</span>
              <span className='text-white text-3xla font-light'>/Month</span>
            </h5>
          <hr />
          </div>
          <ul className='p-4 flex-grow'>
          <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> 24/7 AI driven assistance</li>
          <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> Basic issue resolution support</li>
          <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> 24/7 AI driven assistance</li>
            <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> Basic issue resolution support</li>
          </ul>
          <button className='white-button mx-4 mt-4' onClick={openModal}>Get Started</button>
        </div>
        
        <div className="card sm_t:w-1/3  lg_mob:w-[400px]  flex flex-col">
          <div>
          <h4 className='plan-name'>Enterprise</h4>
          <h5>
            <span className='text-5xl text-white font-medium block lg_t:inline leading-[1.05]'>$499</span>
            <span className='text-white text-3xla font-light'>/Month</span>
          </h5>
          <hr />
          </div>
          <ul className='p-4 flex-grow'>
          <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> 24/7 AI driven assistance</li>
          <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> Basic issue resolution support</li>
          <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> 24/7 AI driven assistance</li>
            <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> Basic issue resolution support</li>
            <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> 24/7 AI driven assistance</li>
            <li className='plan-bullet'><img className='inline mr-2' src="/icons/tick.png" alt="tick-icon" /> Basic issue resolution support</li>
          </ul>
          <button className='white-button mx-4 mt-4' onClick={openModal}>Get Started</button>
        </div>   
    </div>
  </div>
</section>
    {/* ################################# FAQs ############################################### */}
    <section className='py-20 relative'>
    <div className='absolute rounded-full z-[-1]
                      w-[35%] h-[50%] 
                      top-[30%] left-[-15%] 
                      bg-gradient-two 
                      opacity-90 
                       blur-4xl
                      animate-fade-in '>
      </div>
    <div className='flex flex-col items-center'>
    <h2 className='large-title'>FAQs</h2>
    <h3 className="grey-sub-title mb-20">Explore our FAQs for quick answers to common queries about our platform</h3>
    
    <Accordion items={accordionData}/>
    
    </div>
    </section>
    
    
    {/* ############################# What our customers say ################################ */}
    <section className='py-20 relative'>
    <div className='absolute rounded-full z-[-1]
                      w-[40%] h-[40%] 
                      top-[35%] left-[75%] 
                      bg-gradient-two 
                      opacity-90 
                       blur-4xl
                      animate-fade-in '>
      </div>
    <div className='flex flex-col items-center'>
    <h2 className='large-title'>What our Customers Say</h2>
    <h3 className="grey-sub-title mb-20">Discover first-hand experiences and testimonials from our satisfied users.</h3>
    <div className='flex flex-col sm_t:flex-row justify-between gap-8'>

      <div className="card">
        <h3 className='text-3xlb text-white mb-10 '>Emily, 35</h3>
        <p className='base-text'> "SaaStream has revolutionized how we manage projects! The customizable workflows have streamlined our processes, saving us time and effort. Plus, the real-time collaboration features have greatly improved team communication."</p>
      </div>

      <div className="card">
        <h3 className='text-3xlb text-white mb-10 '>Marcus, 28</h3>
        <p className='base-text'> "I can't imagine running my business without SaaStream! The advanced data insights have provided invaluable information for making strategic decisions. The premium support has been exceptional, always quick to address any issues or questions we have."</p>
      </div>
    </div>
    
    
    </div>

    </section>
    
    </div>
  )
}

export default Home