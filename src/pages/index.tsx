import Card from '../components/card';
import { useEffect, useState } from 'react';
import {
  useScrollDirection,
  ScrollDirection,
} from '../components/useScrollDirection';
import Carousel from '../components/carousel';
import { useActiveCtx } from '../context/activeCtx';

export default function Home() {
  const { expanded } = useActiveCtx();
  const data: dataProp[] = require(`../assets/data.json`);
  const [active, setActive] = useState(0);
  const [x, setX] = useState(ScrollDirection.left);
  const direction = useScrollDirection();

  useEffect(() => {
    console.log(active, ' in index');
  }, [active]);

  useEffect(() => {
    setX(direction);
  }, [direction]);
  // console.log(window.scrollX);

  return (
    <div className='overflow-x-auto'>
      <div
        className={
          ' flex flex-col justify-end transition-all duration-200  ' +
          (expanded ? '' : 'h-[70vh]')
        }>
        <div className='flex'>
          {expanded && <Carousel />}{' '}
          <div
            className={
              '  w-max ml-20 transition-all duration-200 ' +
              (expanded ? 'block' : 'flex items-end  h-[50vh]')
            }
            onScrollCapture={(e) => {
              // console.log(e);
            }}>
            {data.map((item, key) => {
              return <Card key={key} {...{ item }} />;
            })}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

