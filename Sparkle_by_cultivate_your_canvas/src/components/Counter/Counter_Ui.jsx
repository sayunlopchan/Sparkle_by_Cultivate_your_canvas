import React from 'react';
import Counter from './Counter';

import cap from '../../assets/icons/cap.svg';
import mic from '../../assets/icons/mic.svg';
import award from '../../assets/icons/award.svg';

const counterData = [
  {
    icon: cap,
    number: 200,
    label: 'Students',
  },
  {
    icon: mic,
    number: 150,
    label: 'Heard Voices',
  },
  {
    icon: award,
    number: 50,
    label: 'Awards',
  },
];

const Counter_Ui = () => {
  return (
    <div className='flex max-lg:flex-col gap-10 justify-around items-center p-10'>
      {counterData.map((item, index) => (
        <div
          key={index}
          className='w-[300px] flex items-center gap-3 border bg-gray-50 py-2 px-5 md:p-2 rounded-lg'
        >
          <div className='size-[80px]'>
            <img src={item.icon} alt={`${item.label} icon`} />
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-gray-800'>
              <Counter number={item.number} />
            </h1>
            <p className='p-text'>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter_Ui;
