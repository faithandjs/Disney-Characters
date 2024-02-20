import React, { useEffect } from 'react';
import { useActiveCtx } from '../context/activeCtx';

export default function Carousel() {
  const data: dataProp[] = require(`../assets/data.json`);
  const { active, expanded } = useActiveCtx();

  useEffect(() => {
    console.log(active, ' in carousel');
  }, [active]);

  return (
    <div className='pl-10 h-[80vh] w-32 border overflow-auto shrink-0'>
      {/* Carousel{' '} */}
      <div className='relative left-[50%] translate-y-[-50%]'>
        {expanded && (
          <ul className='  h-full w-full  z-20  '>
            {data.map((item, key) => (
              <li
                key={key}
                className={
                  'px-2 py-14 -rotate-90 leading-[24rem] ' +
                  (active === key
                    ? 'text-4xl opacity-100'
                    : 'text-xl opacity-50')
                }>
                {item.name}{' '}
              </li>
            ))}
            <li>d</li>
          </ul>
        )}
      </div>
    </div>
  );
}

