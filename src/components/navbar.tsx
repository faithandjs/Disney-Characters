import { Bubble } from 'iconsax-react';
import React from 'react';
import logo from '../assets/Disney_logo.png';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between pt-7 pb-14 child:flex child:items-center px-20'>
      <div>
        <input type='text' />
      </div>
      <div className='flex '>
        <img src={logo} alt='disney logo' className='w-40' />
        <span className='text-3xl pl-4'>Characters</span>
      </div>
      <div>
        <span className='text-xl pr-3'>Menu</span>
        <Bubble size='44' color='#333333' variant='Bold' />
      </div>
    </nav>
  );
}

