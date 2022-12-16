import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import {runSchool} from '../lib/utils';

const Success = () => {
  const {setCartItems,setTotalPrice,setTotalQuantities} = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runSchool();
  },[]);


  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for your Order!</h2>
            <p className='description'>
                if you have any queries, please email
                <a className='email' href="mailto:support.getmynft@gmail.com">support.getmynft@gmail.com</a>
            </p>
            <Link href='/'>
                <button className='btn' width='300px' type='button'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success