import React, { useState } from 'react';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Featured() {
    const [currentIndex , setCurentIndex] = useState(0);

    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          }
    ]

    const prevSlider = () => {
        const isFirstSlider = currentIndex === 0;
        const newIndex = isFirstSlider ? sliders.length - 1 : currentIndex - 1;
        setCurentIndex(newIndex);   
    }
    const nextSlider = () => {
        const isLastSlider = currentIndex === sliders.length - 1;
        const newIndex = isLastSlider ? 0 : currentIndex + 1;
        setCurentIndex(newIndex);   
    }

    const moveToNextSliders = (slideIndex) => {
        setCurentIndex(slideIndex)
    }


    return (
  
        <div className='w-screen h-[500px] py-4 px-4 relative group mx-auto' >
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
            ></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full
            bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactLeft size={25} onClick={prevSlider} className='hidden sm:block'/>
            </div>
            <div className='hidden group-hover:block  absolute top-[50%] -translate-x-100 translate-y-[50%] right-5 text-2xl rounded-full
            bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactRight size={25} onClick={nextSlider} className='hidden sm:block'/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((sliderItems, slideIndex) => (
                        <div className='text-2xl cursor-pointer'
                            key={slideIndex}
                            onClick={() => moveToNextSliders(slideIndex)}
                        >
                            <RxDotFilled/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Featured;