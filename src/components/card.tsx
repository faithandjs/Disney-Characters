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
  const classes = `${
    color.length > 1 ? bg : bg1
  } shrink-0 block mx-12 w-[24rem]  border rounded-[2rem] relative`;

  return (
    <li
      className={classes}
      style={{
        height: percent + "%",
      }}>
      <button
        onClick={() => setActive((s) => (s !== id ? id : 0))}
        className={"w-full h-full "}>
        {/* <img src={movie_logo} alt={name} /> */}
        <img
          src={image}
          alt={name}
          className='h-[22rem] absolute left-[50%] top-[-40%] translate-x-[-50%] tranlate-y-[-5%] '
        />
      </button>{" "}
    </li>
  );
}
