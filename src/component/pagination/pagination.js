import React from 'react'

const Pagination=({totalPage})=>{

  let currentPage = 1;
    let total = 0;

    if(totalPage.length%10 !== 0){
        total = totalPage/10 + 1
    }else {
        total = totalPage/10
    }


  const Pages=()=>{
  let pages =[];

    const pageClick=()=>{

    }


      for (let i = 1; i <= total; i++) {
          pages.push(<li key={i} onClick={pageClick} className={`${currentPage} === i? bg-blue-200:'' list-none px-3 border-2 border-black`}>{i}</li>)
      }
      return pages
  }





  return(
    <div className={'flex justify-center'}>
      <button>{'<'}</button>
        <Pages />
      <button>{'>'}</button>
    </div>
  )
}

export default Pagination
