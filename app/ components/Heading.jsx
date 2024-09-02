import React from 'react';

const Heading = () => {
  return (
    <div className='h-[40vh] sm:h-[60vh] flex flex-col relative justify-center items-center w-full'>
      <h1 className='relative opacity-70 features bg-clip-text text-transparent text-center bg-gradient-to-r from-[#52B450] via-[#E4D75A] to-[#B22E2E] text-[2.5rem] md:text-[6.5rem] lg:text-[9rem]'>
        FEATURES
      </h1>  
      <div className='absolute text-white tracking-widest font-semibold text-center text-[2rem] md:text-[5rem]'>
        FEATURES
      </div>
    </div>
  );
}

export default Heading;
