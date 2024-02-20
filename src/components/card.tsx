import React from 'react';
import { useActiveCtx } from '../context/activeCtx';
import Carousel from './carousel';
import { ScrollDirection } from './useScrollDirection';

export default function Card({ item }: { item: dataProp }) {
  const { active, direction, setActive, expanded, setExpanded } =
    useActiveCtx();
  const data: dataProp[] = require(`../assets/data.json`);
  const {
    about,
    clips,
    color,
    id,
    image,
    movie_logo,
    movie_name,
    name,

    percent = direction === 'left' ? item.percent : item.percent - 30,
    personality,
    physical_appearance,
  } = item;

  // console.log(direction);
  const colors: { [key: string]: string } = {
    red: '#d40819',
    blue: '#105191',
    light_blue: '#50a5fa',
    green: '#09912d',
    purple: '#502b99',
    dark_puple: '#352f40',
    orange: '#e89a5f',
    teal: '#00AEAE',
    yellow: '#e8d85f',
  };

  const transition = 'transition-all duration-500 ';
  const img_scale =
    id === 4 ? 'scale-75' : id === 6 || id === 1 ? 'scale-125' : '';

  return (
    <div className='h-full contents card'>
      {/* CANCEL / REDUCE BUTTON  */}
      {expanded && (
        <div className='flex justify-end w-screen'>
          <button
            onClick={() => {
              setExpanded(false);
            }}>
            Close X
          </button>
        </div>
      )}
      <div
        className={
          'shrink-0 mx-12  rounded-[2rem] relative flex  card_inner ' +
          (expanded ? 'w-[90vw] !h-max p-12' : 'w-[22rem]   ')
        }
        style={{
          height: percent - 15 + '%',
          background:
            color.length > 1
              ? `linear-gradient(45deg, ${colors[color[0]]}, ${
                  colors[color[1]]
                })`
              : colors[color[0]],
        }}
        onClick={() => {
          setActive((s) => (s !== id ? id : 0));
          setExpanded((s) => !s);
        }}>
        {/* CHARACTER IMAGE */}
        <img
          src={image}
          alt={name}
          className={`${transition} ${img_scale} ${
            !expanded
              ? 'w-48 absolute translate-x-[50%] translate-y-[-60%]'
              : 'translate-x-0 translate-y-0 scale-100 w-[32vw]'
          } `}
        />
        <div
          className={
            (expanded ? 'hidden' : '') + ' text-white absolute  bottom-4 left-3'
          }>
          <p
            className='font-extrabold text-3xl capitalize '
            style={{
              color: color.length > 1 ? colors[color[1]] : 'white',
            }}>
            {name}
          </p>
          <p>
            Movie | <span className='font-medium text-xl'>{movie_name}</span>
          </p>
        </div>
        {/* EXPANDED */}
        <div
          className={
            (expanded
              ? 'w-[80vw] h-[50vh] child:shrink-0 shrink-0'
              : ' !hidden') + ' '
          }>
          <div className={' w-full'}>
            {/* MOVIE LOGO */}
            <div className='w-14 h-14'>
              <img src={movie_logo} alt={name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//  left-[50%] top-[-40%]

