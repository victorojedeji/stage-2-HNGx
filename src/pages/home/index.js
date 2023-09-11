import React from 'react';
import featuredImg from '../../assets/headerBg.png';
import imdb from '../../assets/Imdblogo.png'
import tomatoe from '../../assets/tomatoe.png'

export default function Home() {
  return (
    <div className='w-full'>
      <main
        className='min-h-[600px] w-full bg-red-400 px-[95px] relative'
        style={{ backgroundImage: `url(${featuredImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      >
        <div className='py-40 w-[404px]'>
          <h1 className='text-5xl text-white font-bold font-DMsans mb-4'>John Wick 3: Parabellum</h1>

          <div className='flex items-center mb-4 gap-8'>
            <div className='flex items-center gap-2.5'>
              <img src={imdb} alt="IMDB-logo" className='h-4' />
              <p className='font-normal text-xs text-white'>860 / 100</p>
            </div>

            <div className='flex items-center gap-2.5'>
              <img src={tomatoe} alt='rotten-tomatoe' className='w-4 h-4'  />
              <p className='font-normal text-xs text-white'>97%</p>
            </div>
          </div>

          <p className='font-medium text-white text-sm'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        </div>
      </main>

      <section>
        
      </section>
    </div>
  );
}
