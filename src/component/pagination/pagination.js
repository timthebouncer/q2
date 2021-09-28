import React from 'react'
import Pages from './pages'


const Pagination=({totalPage,currentPage,setCurrent})=>{


    let total = 0;

    if(totalPage.length%10 !== 0){
        total = Math.floor(totalPage/10) + 1
    }else {
        total = Math.floor(totalPage/10)
    }




    const pageLeft=()=>{
      if(currentPage === 0)return
      setCurrent(currentPage-1)
    }
    const pageRight=async ()=>{
      if(currentPage === total)return
      await setCurrent(currentPage+1)
      console.log(currentPage,888);
      console.log(total,999);
    }



  return(
    <div className={'flex justify-center'}>
      <button onClick={pageLeft}>{'<'}</button>
        <Pages total={total} currentPage={currentPage}/>
      <button onClick={pageRight}>{'>'}</button>
    </div>
  )
}

export default Pagination
