/**Hero Component */

import react, { useEffect } from "react";
import C_Slider from "./slider";
import C_B2 from "../parts/b2";
import C_B3 from "../parts/b3-latestprojects";
import C_B4 from "../parts/b4-ourTeam";
import C_B5 from "../parts/b5-Parralox";
import C_B6 from "../parts/b6-latestAchi";
interface Models {
  name: string;
  image: string;
  description: string;
}
interface Services {
  headings: string;
  description: string;
  image: string;
}
export default function C_Home() {
  // useEffect(()=>{
  //   const cursorV : HTMLElement | null = document.querySelector('.cursorV.cv');
  //   const pointer : HTMLElement | null = document.querySelector('.pointer');
  //   if(!cursorV || !pointer) return;
  //   document.addEventListener('mouseenter',()=>{
  //       cursorV.style.display = 'block';
  //   });
  //   document.addEventListener('mouseleave',()=>{
  //       cursorV.style.display = 'none';
  //   });
  //   document.addEventListener('mousemove',Tcursor);
  //   document.addEventListener('mousedown', ()=> {cursorV.classList.add('active'); });
  //   document.addEventListener('pointerdown', ()=> cursorV.classList.add('active'));
  //   document.addEventListener('pointerup' , ()=> cursorV.classList.remove('active'));
  //   document.addEventListener('mouseup', ()=> cursorV.classList.remove('active'));
  //   document.addEventListener('pointermove', Tcursor);
    

  //   function Tcursor(e:MouseEvent){
  //     if(!cursorV || !pointer) return;
  //     const h = cursorV.clientHeight;
  //     const w = cursorV.clientWidth;
  //     cursorV.style.transform = `translate(${e.clientX - w/2}px,${e.clientY - h/2}px)`;
  //   }
  // })

  return (
    <> <C_Slider />
      <C_B2/>
      <C_B3/>
      <C_B4/>
      <C_B5/>
      <C_B6/>
    {/* <div className='cursorV cv z-50'>
        <div className='pointer'></div>
      </div> */}
     
      
    </>
  );
}
