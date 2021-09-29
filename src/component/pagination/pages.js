import React from "react";
import {chevronLeft, chevronRight} from '@/Icon/svg'
import './pages.css'

const Pages=({total,currentPage,setCurrent})=>{
  let pages =[];
  const pageClick=(i,val)=>{
    if(i === parseInt(val)-1){
      setCurrent(i)
    }
  }

  const pageLeft=()=>{
    if(currentPage === 0)return
    setCurrent(currentPage-1)
  }
  const pageRight=async ()=>{
    if(currentPage === total)return
    await setCurrent(currentPage+1)
  }


  for (let i = 0; i < total; i++) {
    pages.push(<li key={i} onClick={(e)=>pageClick(i, e.target.innerHTML)} className={ currentPage === i? 'active':'unactivated'}>{i+1}</li>)
  }
  pages.unshift(<span className={'mt-1'} onClick={pageLeft}>{chevronLeft}</span>)
  pages.push(<span className={'mt-1'} onClick={pageRight}>{chevronRight}</span>)
  return pages



}


export default Pages
