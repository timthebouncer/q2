import React from 'react'
import Pages from './pages'


const Pagination=({totalPage,currentPage,setCurrent})=>{


    let total = 0;

    if(totalPage.length%10 !== 0){
        total = Math.floor(totalPage/10) + 1
    }else {
        total = Math.floor(totalPage/10)
    }






  return(
    <div className={'flex justify-center'}>
        <Pages total={total} currentPage={currentPage} setCurrent={setCurrent}/>
    </div>
  )
}

export default Pagination
