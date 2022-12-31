import React from "react";
import { dataProp } from "../types/type";

export default function Card({
  item,
  setActive,
  active,
}: {
  item: dataProp;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) {
  const {
    about,
    clips,
    color,
    id,
    image,
    movie_logo,
    movie_name,
    name,
    percent,
    personality,
    physical_appearance,
  } = item;
  const bg = `bg-gradient-to-tr from-${color[0]}  via-${color[0]} to-${color[1]}`;
  const bg1 = `bg-` + color[0];
  const list_class = `${color.length > 1 ? bg : bg1} ${
    active === id ? "w-max !h-max p-12" : "w-[22rem] mb-40  "
  }    shrink-0 block mx-12  border rounded-[2rem] relative flex`;
  const transition = "transition-all duration-500 ";
  const img_scale =
    id === 4 ? "scale-90" : id === 6 || id === 1 ? "scale-125" : "";
  return (
    <li
      className={list_class}
      style={{
        height: percent + "%",
      }}>
      <button
        onClick={() => setActive((s) => (s !== id ? id : 0))}
        className={active !== id ? "w-full h-full z-20" : "w-0 h-0"}></button>
      {/* <img src={movie_logo} alt={name} /> */}
      <img
        src={image}
        alt={name}
        className={`${transition} ${img_scale} ${
          active !== id
            ? "w-48 absolute translate-x-[50%] translate-y-[-60%]"
            : "translate-x-0 translate-y-0 scale-100 w-[32vw]"
        } `}
      />
      <div
        className={
          active === id ? "w-[80vw] h-[50vh] child:shrink-0 shrink-0" : ""
        }>
        <div className='w-full'></div>
      </div>
    </li>
  );
}
//  left-[50%] top-[-40%]
