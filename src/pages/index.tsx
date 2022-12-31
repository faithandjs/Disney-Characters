import Card from "../components/card";
import { dataProp } from "../types/type";
import { useEffect, useState } from "react";

export default function Home() {
  const data: dataProp[] = require(`../data/data.json`);
  const [active, setActive] = useState(0);
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className='h-[100vh] flex flex-col justify-end'>
      <ul className='h-[50vh] flex items-end w-max '>
        {data.map((item, key) => {
          const getProps = {
            item,
            setActive,
            active,
          };
          return <Card key={key} {...getProps} />;
        })}{" "}
      </ul>
    </div>
  );
}
