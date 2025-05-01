"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export default function GlobalContext({children}){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [index, setIndex] = useState(null)
    const [isVisible, setIsVisible] = useState(false)
  
    function handleEnter(idx) {
      setIsVisible(true)
      setIndex(idx);
    }
  
    function handleLeave() {
      setIsVisible(false)
    }
  
  

    return (
        <Context.Provider value={{ mousePosition, setMousePosition , handleEnter , handleLeave , index ,isVisible}}>
            {children}
        </Context.Provider>
    );
}

export const useDuoContext = () => useContext(Context);