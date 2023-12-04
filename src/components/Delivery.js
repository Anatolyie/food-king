import React, { useState } from 'react';

import { IoCloseSharp } from "react-icons/io5";

import Title from './Title';

function Delivery() {
    const [app, SetApp] = useState(false)

    const closeModal = () => {
        SetApp(!app)
    }

    if (app) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }


    return (
        <div className="w-full bg-white py-4 px-4">
            <Title title={'Quick Delivery App'}/>
            <div className='max-w-screen-xl mx-auto grid md:grid-cols-2'>
                <img className='w-[550px] mx-auto my-4' src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="app mobile" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>
                        Get The App
                    </p>
                    <h3 className='md:text-4xl sm:text-3x text-2xl font-bold py-2'>Limitless Convenience on-demand</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi animi autem accusantium porro libero non, adipisci soluta cupiditate sunt fugit reiciendis voluptatum velit officia a quaerat. Sunt ducimus sapiente iusto.
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto' onClick={closeModal}>
                        Get Start
                    </button>
                </div>
            </div>
            {
                app ? 
                <div className="fixed inset-0 h-screen w-screen bg-black bg-opacity-40" onClick={closeModal}>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border border-solid border-black p-5 md:p-10 rounded-2xl bg-white hover:scale-105">
                        <IoCloseSharp className='absolute right-4 top-4 cursor-pointer ' onClick={closeModal}/>
                        The application is under development, please wait</span>
                </div>
                : ''
            }
           
        </div>
    );
}

export default Delivery;