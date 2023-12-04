import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

import Modal from './Modal';

import { mealData } from '../data/data';

import Title from './Title';

function Meal() {
    const [foods, setFoods] = useState(mealData)
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(false)

    const filltercategory = (category) => {
        setFoods(
            mealData.filter((item) => {
                return item.category === category
            })
        )
    }

    const showMenuInfo = (id) => {
        setShowModal(true)
        setActiveID(id)
    }

    if (showModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }


    return (
        <div className='max-w[1440px] m-auto px-4 py-12'>
            <Title title={'Our Meal'}/>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center md:justify-center '>
                    <button onClick={() => setFoods(mealData)} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
                    <button onClick={() => filltercategory('pizza')} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Pizza</button>
                    <button onClick={() => filltercategory('chicken')} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
                    <button onClick={() => filltercategory('salad')} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
                </div>
            </div>


            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
                {
                    foods.map((item) => (
                        <div key={item.name} className='hover:scale-105 duration-300 border border-solid border-black p-5 rounded-lg h-96 mt-8'>
                            <img 
                                className='w-full h-[200px] object-cover rounded-lg'
                                src={item.image} alt={item.name} />
                            <div className='flex justify-between px-2 py-4 '>
                                <p className='font-bold '>{item.name}</p>
                                <p className='-mt-10 bg-orange-700 h-18 w-18 rounded-full text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                            </div>

                            <div className='pl-2 py-4 -mt-7'>
                                <p className='flex items-center text-indigo-600 cursor-pointer' onClick={() => showMenuInfo(item.id)}>View More <FaArrowRight className='w-5 ml-2'/></p>
                            </div>
                            <div className='px-2'>
                               {
                                 item.ingredients.map((ing, index) => (
                                    <span key={index}>
                                        <span className='font-bold'>{ing}</span>
                                         {index < item.ingredients.length - 1 && <span>, </span>}
                                    </span>
                                  ))
                               }
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }
        </div>
    );
}

export default Meal;