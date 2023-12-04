import { topPicks } from '../data/data'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Title from './Title';

function TopPickes(props) {
    return (
        <>
            <Title title={'Top Picks'}/>
            <div className='lg:flex max-w[1440px] m-auto py-2 px-2'>
                <Splide options={{perPage: 4, gap: '0.5rem', drag: 'free', breakpoints:{ 640: { perPage: 2}}}
      }>
                    {
                        topPicks.map((item) => {
                            return (
                                <SplideSlide key={item.id} className='cursor-pointer'>
                                    <div className='rounded-3xl relative'>
                                        <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                                            <p className='px-2 font-bolt text-2xl'>{item.title} </p>
                                            <p className='px-2'>{item.price}</p>
                                            <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add To Cart</button>
                                        </div>
                                        <img 
                                            className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                                            src={item.img} alt={item.title} />
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div>
        </>
    );
}

export default TopPickes;