import React from "react";


const Pages=({total,currentPage})=>{
  let pages =[];
  const pageClick=()=>{

  }


  for (let i = 0; i < total; i++) {
    pages.push(<li key={i} onClick={pageClick} className={ currentPage === i? 'bg-blue-200 list-none px-3 border-2 border-black':'list-none px-3 border-2 border-black'}>{i+1}</li>)
  }
  return pages



}


export default Pages
