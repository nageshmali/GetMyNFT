import React from 'react';
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022&copy;GetMyNFT &nbsp;&nbsp;&nbsp;&nbsp;All rights reserved &nbsp;&nbsp;&nbsp;&nbsp;Made with ❤ by Nagesh</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer