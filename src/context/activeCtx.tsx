import React, { createContext, useContext, useEffect, useState } from 'react';
import { ScrollDirection } from '../components/useScrollDirection';

const ActiveCtx = createContext(
  {} as {
    // item: dataProp;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    direction: ScrollDirection;
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  }
);
export function ActiveProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [direction, setX] = useState(ScrollDirection.left);
  // const [item, setItem]= useState()

  const value = {
    direction,
    active,
    setActive,
    expanded,
    setExpanded,
  };
  return <ActiveCtx.Provider value={value}>{children}</ActiveCtx.Provider>;
}

export const useActiveCtx = () => useContext(ActiveCtx);

/*
so basically, context handles the cards and active cart

*/

