import { categories } from "../data/data";

import Title from './Title';

function Categories() {
    return (
      <div className="max-w-[1440px] m-auto px-4 py-4">
            <Title title={'Trendong categories'}/>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
                {
                    categories.map((item) => (
                        <div key={item.id} className="p-4 flex justify-center items-center hover:scale-105 duration-300">
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))
                }
            </div>
      </div>
    );
}

export default Categories;